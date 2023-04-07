import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { UpdateUserForm } from "@presentation/components/forms/UpdateUser/UpdateUserForm";

export const AccountPage = memo(() => {
  return <Fragment>
    <Seo title="MobyLab Web App | Account" />
    <WebsiteLayout>
      <Box sx={{ padding: "50px 150px 0px 550px", justifyItems: "center" }}>
        {/*<ContentCard>*/}
          <UpdateUserForm />
        {/*</ContentCard>*/}
      </Box>
    </WebsiteLayout>
  </Fragment>
});