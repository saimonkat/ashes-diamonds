import * as yup from "yup";
import { Resolver } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { relationshipListPerson } from "@components/pages/started/banner/consts";

export enum EDestiny {
  person = "person",
  pet = "pet",
}

export enum EJourneyFormFields {
  destiny = "destiny",
  relationship = "relationship",
  lovedName = "lovedName",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  phone = "phone",
}

export type TJourneyForm = {
  [EJourneyFormFields.destiny]: string;
  [EJourneyFormFields.relationship]: string;
  [EJourneyFormFields.lovedName]: string;
  [EJourneyFormFields.firstName]: string;
  [EJourneyFormFields.lastName]: string;
  [EJourneyFormFields.email]: string;
  [EJourneyFormFields.phone]: string;
};

export const journeyFormDefaultValues: TJourneyForm = {
  [EJourneyFormFields.destiny]: EDestiny.person,
  [EJourneyFormFields.relationship]: relationshipListPerson[0].value,
  [EJourneyFormFields.lovedName]: "",
  [EJourneyFormFields.firstName]: "",
  [EJourneyFormFields.lastName]: "",
  [EJourneyFormFields.email]: "",
  [EJourneyFormFields.phone]: "",
};

export const journeyFormResolver = (): Resolver<TJourneyForm> => {
  const requiredText = "This field is required";
  const minText = `This field cannot contain less than 2 symbols`;
  const maxText = `This field cannot contain more than 30 symbols`;
  const emailNotValid = "Please enter valid email address";
  const emailMaxText = "Email cannot contain more than 255 symbols";

  return yupResolver(
    yup.object().shape({
      [EJourneyFormFields.destiny]: yup.string().required(requiredText),
      [EJourneyFormFields.relationship]: yup
        .string()
        .required(requiredText)
        .trim(),
      [EJourneyFormFields.lovedName]: yup
        .string()
        .required(requiredText)
        .trim()
        .min(2, minText)
        .max(30, maxText),
      [EJourneyFormFields.firstName]: yup
        .string()
        .required(requiredText)
        .trim()
        .min(2, minText)
        .max(30, maxText),
      [EJourneyFormFields.lastName]: yup
        .string()
        .required(requiredText)
        .min(2, minText)
        .max(30, maxText)
        .trim(),
      [EJourneyFormFields.email]: yup
        .string()
        .required(requiredText || "This field is required")
        .max(255, emailMaxText)
        .email(emailNotValid)
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, emailNotValid)
        .test("isValidDomain", emailNotValid, function (value) {
          const domain = value.split("@")[1];
          if (domain) {
            const domainParts = domain.split(".");
            return (
              domainParts.length >= 2 &&
              domainParts[domainParts.length - 1].length >= 2
            );
          }
          return false;
        })
        .trim(),
      [EJourneyFormFields.phone]: yup
        .string()
        .required(requiredText)
        .test(
          EJourneyFormFields.phone,
          "Please enter valid phone number",
          (val) => {
            const valLength = val.replace(/\D/g, "").length;
            return valLength === 11;
          }
        ),
    })
  );
};
