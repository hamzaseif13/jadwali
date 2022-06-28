import React from 'react'

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
function Loading({color}) {
  return (
    <div className="flex justify-center mt-20">
      <ClipLoader color="#FFFFFF"/>
    </div>
  )
}

export default Loading