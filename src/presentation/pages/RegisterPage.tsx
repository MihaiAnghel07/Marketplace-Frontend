import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/material";
import { Seo } from "@presentation/components/ui/Seo";
import { RegisterForm } from "@presentation/components/forms/Register/RegisterForm";

export const RegisterPage = memo(() => {
    return <Fragment>
        <Seo title="MobyLab Web App | Register" />
        <WebsiteLayout>
            <Box sx={{ padding: "50px 150px 0px 550px", justifyItems: "center" }}>
                <RegisterForm />
            </Box>
        </WebsiteLayout>
    </Fragment>
});