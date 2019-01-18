// This is the Character Card

import React from "react";

const CharacterCard = (prop) =>
<div className = "charPicContainer">
<img alt={prop.name} src={prop.image }/>
</div>

export default CharacterCard;

