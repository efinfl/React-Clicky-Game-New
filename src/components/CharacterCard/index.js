// This is the Character Card

import React from "react";
import { AST_PropAccess } from "terser";

function CharacterCard(prop) {
    return (
<div className = "charPicContainer">
<img alt={prop.name} src={prop.image }/>
</div>
    );
}


export default CharacterCard;

