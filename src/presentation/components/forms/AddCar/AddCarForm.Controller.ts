import { AddCarFormController, AddCarFormModel } from "./AddCarForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoginApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { useAppRouter } from "@infrastructure/hooks/useAppRouter";
import { useDispatch } from "react-redux";
import { setToken } from "@application/state-slices";
import { toast } from "react-toastify";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: { brand: string }) => {
    const defaultValues = {
        brand: "",
        model: "",
        year: 0,
        km: 0,
        price: 0
    };

    if (!isUndefined(initialData)) {
        return {
            ...defaultValues,
            ...initialData,
        };
    }

    return defaultValues;
};

/**
 * Create a hook to get the validation schema.
 */
const useInitAddCarForm = () => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();

    const schema = yup.object().shape({ 
        brand: yup.string() 
            .required(formatMessage( 
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({ 
                        id: "globals.brand",
                    }),
                }))
            .default(defaultValues.brand),
        model: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.model",
                    }),
                }))
            .default(defaultValues.model),
        year: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.year",
                    }),
                }))
            .default(defaultValues.year),
        km: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.km",
                    }),
                }))
            .default(defaultValues.km),
        price: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.price",
                    }),
                }))
            .default(defaultValues.price),
    });

    const resolver = yupResolver(schema); // Get the resolver.

    return { defaultValues, resolver }; // Return the default values and the resolver.
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useAddCarFormController = (): AddCarFormController => {
    const { formatMessage } = useIntl();
    const { defaultValues, resolver } = useInitAddCarForm();
    const { redirectToHome } = useAppRouter();
    const { loginMutation: { mutation, key: mutationKey } } = useLoginApi();
    const { mutateAsync: login, status } = useMutation([mutationKey], mutation);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const submit = useCallback((data: AddCarFormModel) =>
        //login(data).then((result) => {
        //    dispatch(setToken(result.response?.token ?? ''));
        //    toast(formatMessage({ id: "notifications.messages.authenticationSuccess" }));
            redirectToHome(), [login, queryClient, redirectToHome, dispatch]);
        //}), [login, queryClient, redirectToHome, dispatch]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddCarFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues, // Initialize the form with the default values.
        resolver // Add the validation resolver.
    });

    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register // Add the variable register to bind the form fields in the UI with the form variables.
        },
        computed: {
            defaultValues,
            isSubmitting: status === "loading" // Return if the form is still submitting or nit.
        },
        state: {
            errors // Return what errors have occurred when validating the form input.
        }
    }
}