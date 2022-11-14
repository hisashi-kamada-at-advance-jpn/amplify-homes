/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import StandardCard from "./StandardCard";
import { View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="348px"
      height="276px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <StandardCard
        display="flex"
        gap="0"
        direction="column"
        width="348px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "HomeCard34472689")}
      ></StandardCard>
    </View>
  );
}
