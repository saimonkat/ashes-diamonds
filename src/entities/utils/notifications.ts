import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification";
import axios, { AxiosError } from "axios";
import { isEmpty, isObject, isString } from "lodash";

export type TResponseError = {
  data: any;
  error: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
};

export const showNotification = (props: ArgsProps): void => {
  const { maxCount, closeIcon, placement } = props;
  const type = props.type || "info";
  notification.config({
    maxCount: maxCount || 3,
  });
  notification[type]({
    ...props,
    placement: placement ?? "top",
    maxCount: undefined,
  });
};

export const showAxiosNotificationError = (
  // ToDo remove type any
  props: AxiosError | TResponseError | any
): void => {
  let notificationProps: ArgsProps = {
    message: `Unknown error`,
    description: `Try to reload the page or report an error to the site administration`,
  };
  if (!props) {
    showNotification({
      ...notificationProps,
      type: "error",
    });
    return;
  }

  if (axios.isAxiosError(props) || axios.isAxiosError(props?.data)) {
    notificationProps = {
      message: `Error ${props.response?.status}`,
      description: props.message || props.response?.data.message,
    };
  } else if (isObject(props.data.error) && !isEmpty(props.data.error)) {
    notificationProps = {
      message: `Error ${props.data.error.status}`,
      description: props.data.error.message,
    };
  } else if (isString(props.data.error)) {
    notificationProps = {
      message: `Error: ${props.data.error}`,
      description: null,
    };
  } else if (isString(props.data)) {
    notificationProps = {
      message: `Error: ${props.data}`,
      description: "Please try to reload the page",
    };
  }

  showNotification({
    ...notificationProps,
    type: "error",
  });
};
