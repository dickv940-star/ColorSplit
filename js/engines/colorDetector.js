/*
=========================================
Color Detector
=========================================
*/

const ColorDetector = {

    async detect() {

        const type = AppState.file.type;

        if (type === "image/png") {

            AppState.metadata.alpha = true;

        }

        AppState.metadata.colorSpace = "RGB";

        AppState.metadata.bitDepth = "24 Bit";

        AppState.metadata.iccProfile = "sRGB";

        return AppState.metadata;

    }

};
