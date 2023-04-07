import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { AddCarForm } from "@presentation/components/forms/AddCar/AddCarForm";

export const PublishCarPage = memo(() => {
  return <Fragment>
    <Seo title="MobyLab Web App | Publish Car" />
    <WebsiteLayout>
      <Box sx={{ padding: "50px 150px 0px 550px", justifyItems: "center" }}>
        {/*<ContentCard>*/}
          <AddCarForm />
        {/*</ContentCard>*/}
      </Box>
    </WebsiteLayout>
  </Fragment>
});