import { body } from "express-validator";
import { PHOTO_SIZE_PRESETS } from "../utils/photoPresets.js";

const ALLOWED_BACKGROUND_COLOURS = [
    "white",
    "blue",
    "red",
    "black",
];

export const processImageValidation = [
    body("filename")
        .trim()
        .notEmpty()
        .withMessage("filename is required"),

    body("backgroundColour")
        .optional()
        .isIn(ALLOWED_BACKGROUND_COLOURS)
        .withMessage(
            `backgroundColour must be one of: ${ALLOWED_BACKGROUND_COLOURS.join(", ")}`
        ),

    body("photoSizePreset")
        .optional()
        .isIn(PHOTO_SIZE_PRESETS)
        .withMessage(
            `photoSizePreset must be one of: ${PHOTO_SIZE_PRESETS.join(", ")}`
        ),
];
