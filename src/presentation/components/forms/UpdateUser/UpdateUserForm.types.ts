import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";

export type UserUpdateFormModel = {
    name: string;
    password: string;
};

export type UserUpdateFormState = {
    errors: FieldErrorsImpl<DeepRequired<UserUpdateFormModel>>;
};

export type UserUpdateFormActions = {
    register: UseFormRegister<UserUpdateFormModel>;
    watch: UseFormWatch<UserUpdateFormModel>;
    handleSubmit: UseFormHandleSubmit<UserUpdateFormModel>;
    submit: (body: UserUpdateFormModel) => void;
};
export type UserUpdateFormComputed = {
    defaultValues: UserUpdateFormModel,
    isSubmitting: boolean
};

export type UserUpdateFormController = FormController<UserUpdateFormState, UserUpdateFormActions, UserUpdateFormComputed>;