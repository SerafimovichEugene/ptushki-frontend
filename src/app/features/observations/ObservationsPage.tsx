import React from "react";
import { Link } from "react-router-dom";
import { Button, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import "../../../components/table/DataGrid.scss";
import { labels } from "../../../config/i18n/labels";
import { ROUTE_ADD_OBSERVATION } from "../routing/routes";
import { ObservationListConnected } from "./ObservationList";

export const ObservationsPage = () => {
  return (
    <div style={{ backgroundColor: "white", flexGrow: 1 }} className="p-3">
      <div className="d-flex align-items-center">
        {/* TODO refactor layouts, extract common class names */}
        {/* there are at least 3 places where we define page header, wtf??? */}
        <h1 className="font-weight-lighter">{labels.observations.title}</h1>
        <Button
          size="sm"
          color="orange"
          className="ml-4 px-3"
          tag={Link}
          to={ROUTE_ADD_OBSERVATION.path}
        >
          + {labels.addObservation.actionTitle}
        </Button>
        <UncontrolledDropdown>
          <DropdownToggle outline size="sm" caret className="ml-3 px-3">
            {labels.importData}
          </DropdownToggle>
        </UncontrolledDropdown>
        <div className="mr-auto" />
        <UncontrolledDropdown>
          <DropdownToggle size="sm" caret className="primary-button ml-3 px-3">
            {labels.exportData}
          </DropdownToggle>
        </UncontrolledDropdown>
      </div>
      <ObservationListConnected />
    </div>
  );
};
