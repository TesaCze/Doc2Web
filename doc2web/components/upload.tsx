"use client";

import { Button } from "@nextui-org/button";
import {
  UploadIcon
} from "@/components/icons";

export const Upload = () => {

  return (
    <Button 
    radius="full" 
    //startContent={<UploadIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
    onPress={() => console.log("mnau")}>
    Upload file
    </Button>
  );
};
