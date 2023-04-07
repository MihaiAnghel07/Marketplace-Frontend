import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";

export const CarsPage = memo(() => {
  return <Fragment>
    <Seo title="MobyLab Web App | Cars" />
    <WebsiteLayout>
      <Box sx={{ padding: "50px 150px 0px 550px", justifyItems: "center" }}>
        {/*<ContentCard>*/}
          <h2>Cars Page!</h2>
        {/*</ContentCard>*/}
      </Box>
    </WebsiteLayout>
  </Fragment>
});