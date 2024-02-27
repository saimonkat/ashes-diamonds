import React, { FC, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AxiosResponse } from "axios";

//components
import Begin from "@features/started/begin-button/Begin";
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./banner.module.scss";
//shared
import pet from "../../../../shared/icons/started/pet.svg";
import person from "../../../../shared/icons/started/person.svg";
import check from "../../../../shared/icons/started/check.svg";
import photos from "../../../../shared/images/started/photos.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeSecond from "../../../../shared/images/home/about/fadeSecond.png";
import fade from "../../../../shared/images/home/about/fade.png";

import {
  EDestiny,
  EJourneyFormFields,
  journeyFormDefaultValues,
  journeyFormResolver,
  TJourneyForm,
} from "./formAttrs";
import {
  relationshipListPerson,
  relationshipListPet,
} from "@components/pages/started/banner/consts";

import axiosInstance from "../../../../api/api";
import {
  showAxiosNotificationError,
  showNotification,
} from "@entities/utils/notifications";

const Banner: FC = () => {
  const [destiny, setDestiny] = useState<EDestiny>(
    (journeyFormDefaultValues[EJourneyFormFields.destiny] as EDestiny.person) ??
      EDestiny.person
  );
  const [relationshipList, setRelationshipList] = useState<
    { value: string; label: string }[]
  >(relationshipListPerson);

  const methods = useForm({
    resolver: journeyFormResolver(),
    defaultValues: journeyFormDefaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    getValues,
  } = methods;

  const renderError = (fieldName: EJourneyFormFields) =>
    errors[fieldName]?.message && (
      <p className={style.errorText}>{errors[fieldName]?.message}</p>
    );

  const handelDestinyChange = (val: EDestiny) => {
    setValue(EJourneyFormFields.destiny, val);
    setDestiny(val);
    setRelationshipList(
      val == EDestiny.person ? relationshipListPerson : relationshipListPet
    );
    reset({
      ...getValues(),
      [EJourneyFormFields.relationship]:
        val == EDestiny.person
          ? relationshipListPerson[0].value
          : relationshipListPet[0].value,
    });
  };

  const createOrder = (data: any): Promise<void> => {
    return axiosInstance
      .post("/order", data)
      .then((data: AxiosResponse) => {
        showNotification({
          type: "success",
          message: "Order created",
          placement: "top",
        });
      })
      .catch((err) => {
        showAxiosNotificationError(err);
        throw err;
      });
  };

  const onSubmit: SubmitHandler<TJourneyForm> = (data) => {
    const params = {
      first_name: data[EJourneyFormFields.firstName].trim(),
      last_name: data[EJourneyFormFields.lastName].trim(),
      email: data[EJourneyFormFields.email].trim(),
      phone: data[EJourneyFormFields.phone]
        .trim()
        .replace(/\D/g, "")
        .slice(1, data[EJourneyFormFields.phone].length)
        .replace(/^(\d{3})(\d{3})(\d{4}).*/, "$1-$2-$3"),
      target_name: data[EJourneyFormFields.lovedName].trim(),
      target_type: data[EJourneyFormFields.destiny].trim(),
      target_relationship: data[EJourneyFormFields.relationship].trim(),
    };

    createOrder(params).then(() => {
      reset();
    });
  };

  return (
    <div className={style.banner}>
      <ImageWrapper
        src={fadeLeft}
        alt="fade left"
        wrapperClassName={style.fadeLeft}
      />
      <ImageWrapper
        src={fadeRightSecond}
        alt="fade right second"
        wrapperClassName={style.fadeRightSecond}
      />
      <ImageWrapper
        src={fadeSecond}
        wrapperClassName={style.fadeSecond}
        alt="fade second"
      />
      <ImageWrapper src={photos} alt="photos" wrapperClassName={style.photos} />
      <ImageWrapper src={fade} wrapperClassName={style.fade} alt="fade" />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.singWrapper}>
            <div className={style.sign}>
              Remember
              <br />
              remarkably
            </div>
          </div>
          <h1 className="subtitle subtitle--wide">Starting your journey</h1>
          <FormProvider {...methods}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>1</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label htmlFor="person">
                    We're so excited to help you celebrate an incredible life!
                    Is this diamond for a person or a pet?
                  </label>
                  <ul>
                    <li
                      onClick={() => handelDestinyChange(EDestiny.person)}
                      className={destiny === "person" ? style.destiny : ""}
                    >
                      <div className={style.imgWrapper}>
                        <ImageWrapper
                          src={person}
                          alt="person"
                          objectFit={"contain"}
                        />
                      </div>
                      <span>Person</span>
                      <ImageWrapper
                        src={check}
                        alt="check"
                        wrapperClassName={style.check}
                      />
                    </li>
                    <li
                      onClick={() => handelDestinyChange(EDestiny.pet)}
                      className={destiny === "pet" ? style.destiny : ""}
                    >
                      <div className={style.imgWrapper}>
                        <ImageWrapper
                          src={pet}
                          alt="pet"
                          objectFit={"contain"}
                        />
                      </div>
                      <span>Pet</span>
                      <ImageWrapper
                        src={check}
                        alt="check"
                        wrapperClassName={style.check}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>2</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label htmlFor="form-relationship">
                    {destiny === EDestiny.person
                      ? "What is their relationship to you?"
                      : "What type of pet is this?"}
                  </label>
                  <div className={style.selectWrapper}>
                    <select
                      id="form-relationship"
                      {...register(EJourneyFormFields.relationship)}
                      className={`${
                        renderError(EJourneyFormFields.relationship) &&
                        style.error
                      }`}
                    >
                      {relationshipList.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {renderError(EJourneyFormFields.relationship)}
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>3</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label htmlFor="form-lovedName">
                    What is your loved one's first name?
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    id="form-lovedName"
                    {...register(EJourneyFormFields.lovedName)}
                    className={`${
                      Boolean(getValues()[EJourneyFormFields.lovedName]) &&
                      style.success
                    } ${
                      renderError(EJourneyFormFields.lovedName) && style.error
                    }`}
                  />
                  {renderError(EJourneyFormFields.lovedName)}
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>4</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label htmlFor="form-names">What is your name?</label>
                  <div className={style.inputs}>
                    <input
                      type="text"
                      placeholder="First name"
                      id="form-names"
                      {...register(EJourneyFormFields.firstName)}
                      className={`${
                        Boolean(getValues()[EJourneyFormFields.firstName]) &&
                        style.success
                      } ${
                        renderError(EJourneyFormFields.firstName) && style.error
                      }`}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      {...register(EJourneyFormFields.lastName)}
                      className={`${
                        Boolean(getValues()[EJourneyFormFields.lastName]) &&
                        style.success
                      } ${
                        renderError(EJourneyFormFields.lastName) && style.error
                      }`}
                    />
                  </div>
                  {renderError(EJourneyFormFields.firstName) ||
                    renderError(EJourneyFormFields.lastName)}
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>5</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label className={style.emailLabel} htmlFor="form-email">
                    Enter your email address 
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    id="form-email"
                    {...register(EJourneyFormFields.email)}
                    className={`${
                      Boolean(getValues()[EJourneyFormFields.email]) &&
                      style.success
                    } ${renderError(EJourneyFormFields.email) && style.error}`}
                  />
                  {renderError(EJourneyFormFields.email)}
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.number}>
                  <p>6</p>
                  <span></span>
                </div>
                <div className={style.content}>
                  <label htmlFor="form-phone">Enter your phone number</label>
                  <InputMask
                    mask="+1 (999) 999-9999"
                    id="form-phone"
                    placeholder="+1 (___) ___-____"
                    {...register(EJourneyFormFields.phone)}
                    className={`${
                      Boolean(getValues()[EJourneyFormFields.phone]) &&
                      style.success
                    } ${renderError(EJourneyFormFields.phone) && style.error}`}
                  />
                  {renderError(EJourneyFormFields.phone)}
                </div>
              </div>
              <div className={style.buttons}>
                <Begin />
                <p>We will call you back soon</p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
