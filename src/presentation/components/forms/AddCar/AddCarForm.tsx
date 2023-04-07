import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    OutlinedInput
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useAddCarFormController } from "./AddCarForm.Controller";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { isEmpty, isUndefined } from "lodash";

/**
 * Here we declare the login form component.
 */
export const AddCarForm = () => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useAddCarFormController();

    return <form onSubmit={actions.handleSubmit(actions.submit)}>
        <Stack spacing={4} style={{ width: "50%" }}>
            <ContentCard title={formatMessage({ id: "globals.addCar" })}>
                <Grid container item direction="row" xs={12} columnSpacing={4}>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl 
                            fullWidth
                            error={!isUndefined(state.errors.brand)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.brand" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("brand")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.brand",
                                        }),
                                    })}
                                autoComplete="brand"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.brand)}
                            >
                                {state.errors.brand?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.model)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.model" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("model")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.model",
                                        }),
                                    })}
                                autoComplete="model"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.model)}
                            >
                                {state.errors.model?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.year)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.year" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("year")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.year",
                                        }),
                                    })}
                                autoComplete="year"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.year)}
                            >
                                {state.errors.year?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.km)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.km" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("km")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.km",
                                        }),
                                    })}
                                autoComplete="km"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.km)}
                            >
                                {state.errors.km?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container item direction="column" xs={12} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.price)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.price" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("price")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.price",
                                        }),
                                    })}
                                autoComplete="price"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.price)}
                            >
                                {state.errors.price?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </ContentCard>
            <Grid container item direction="row" xs={12} className="padding-top-sm">
                <Grid container item direction="column" xs={12} md={7}></Grid>
                <Grid container item direction="column" xs={5}>
                    <Button type="submit" disabled={!isEmpty(state.errors) || computed.isSubmitting}>
                        {!computed.isSubmitting && <FormattedMessage id="globals.submit" />}
                        {computed.isSubmitting && <CircularProgress />}
                    </Button>
                </Grid>
            </Grid>
        </Stack>
    </form>
};