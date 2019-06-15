import React, { FC, useState, useCallback } from "react";
import { Button } from "reactstrap";

import {
  CommonBird,
  FormValues
} from "../../../components/common-bird/CommonBird";
import { IChangeValue } from "../../../components/autosuggest/Autosuggest";
import { BirdObservationsListConnected } from "./BirdObservationsList";

import { BirdInfo } from "./BirdInfoModel";
import { labels } from "../../../config/i18n/labels";

import {
  circumstancesConfig,
  observationConfig,
  birdConfig
} from "../add-observation/test.data";

import { birdData, formValues } from "./test-data";

import "./BirdInfo.scss";
import { Scope, UserAction } from "../../../config/permissions";
import { CanConnected } from "../auth/CanConnected";

const blockName = "bird-info";

interface Image {
  src: string;
  altText: string;
  id: number;
}

interface InfoBlock {
  title: string;
  value: string | number;
  className?: string;
}

const renderImage = function({ src, altText, id }: Image) {
  return (
    <img key={id} src={src} alt={altText} className={`${blockName}__photo`} />
  );
};

const HeaderInfoBlock = ({ label }: { label: string }) => {
  return <p className={`${blockName}__block-info-title`}>{label}</p>;
};

export const InfoBlock = function({ title, value, className }: InfoBlock) {
  return (
    <div className={className}>
      <p className={`${blockName}__info-title`}>{title}</p>
      <p className={`${blockName}__info-value`}>{value}</p>
    </div>
  );
};

export const BirdInfoForm: FC<{
  birdInfo: BirdInfo;
}> = () => {
  const [form, setFormValues] = useState<FormValues>(formValues);
  const [bird, setBird] = useState(birdData.params);

  const onChangeValue = useCallback(
    ({ value, type }: IChangeValue) => {
      setFormValues({ ...form, [type]: value });
      console.log(form);
    },
    [form]
  );

  return (
    <div className={blockName}>
      <div className={`${blockName}__header`}>
        <h1 className={`${blockName}__title`}>{birdData.name}</h1>
        <CanConnected I={UserAction.export} a={Scope.observations}>
          <Button outline className={`${blockName}__btn`}>
            {labels.birdInfo.export}
          </Button>
        </CanConnected>
        <Button outline className={`${blockName}__btn`}>
          {labels.birdInfo.edit}
        </Button>
        <Button outline className={`${blockName}__btn`}>
          {labels.birdInfo.delete}
        </Button>
      </div>
      <p className={`${blockName}__subtitle`}>{birdData.code}</p>
      <p className={`${blockName}__euring-title`}>{labels.birdInfo.euring}</p>
      <span className={`${blockName}__euring`}>{birdData.euring}</span>
      <CommonBird
        birdConfig={birdConfig}
        circumstancesConfig={circumstancesConfig}
        observationConfig={observationConfig}
        onChangeBirdValues={setBird}
        birdParams={bird}
        onChangeFormValue={onChangeValue}
        formValues={form}
        viewMode
      />
      <p className={`${blockName}__obs-history-title`}>
        {labels.birdInfo.observationsHistory}
      </p>
      <BirdObservationsListConnected />
      <div className={`${blockName}__buttons`}>
        <Button className={`${blockName}__back-btn`}>
          {labels.birdInfo.back}
        </Button>
        <Button className={`${blockName}__edit-btn`}>
          {labels.birdInfo.edit}
        </Button>
      </div>
    </div>
  );
};
