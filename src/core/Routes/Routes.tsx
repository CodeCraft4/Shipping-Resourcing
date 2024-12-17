import { Applayout } from "@muc/layout";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import {
  AboutContainer,
  ContactUsContainer,
  HomeContainer,
  ProjectsContainer,
  ProjectStepperContainer,
  RequestQuoteContainer,
  ServicesContainer,
} from "@muc/module";

const Routes = () => {
  return (
    <>
      <Applayout>
        <ReactRoutes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/AboutUs" element={<AboutContainer />} />
          <Route path="/OurServices" element={<ServicesContainer />} />
          <Route path="/ContactUs" element={<ContactUsContainer />} />
          <Route path="/Projects" element={<ProjectsContainer />} />
          <Route path="/Request-Quote" element={<RequestQuoteContainer />} />
          <Route path="/ProjectsInfo" element={<ProjectStepperContainer />} />
        </ReactRoutes>
      </Applayout>
    </>
  );
};

export default Routes;
