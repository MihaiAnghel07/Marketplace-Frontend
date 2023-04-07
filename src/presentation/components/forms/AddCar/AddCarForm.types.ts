import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired
} from "react-hook-form";

export type AddCarFormModel = {
    brand: string;
    model: string;
    year: number;
    km: number;
    price: number;
};

export type AddCarFormState = {
    errors: FieldErrorsImpl<DeepRequired<AddCarFormModel>>;
};

export type AddCarFormActions = {
    register: UseFormRegister<AddCarFormModel>;
    handleSubmit: UseFormHandleSubmit<AddCarFormModel>;
    submit: (body: AddCarFormModel) => void;
};
export type AddCarFormComputed = {
    defaultValues: AddCarFormModel,
    isSubmitting: boolean
};

export type AddCarFormController = FormController<AddCarFormState, AddCarFormActions, AddCarFormComputed>;