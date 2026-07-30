/*
=========================================
Metadata Reader
=========================================
*/

const MetadataReader = {

    async read(file) {

        AppState.metadata = {

            name: file.name,

            type: file.type,

            size: file.size,

            extension: file.name.split(".").pop().toUpperCase(),

            modified: new Date(file.lastModified)
                .toLocaleString(),

            width: 0,

            height: 0,

            dpi: 96,

            aspectRatio: "",

            colorSpace: "Unknown",

            bitDepth: "-",

            alpha: false,

            iccProfile: "Unknown"

        };

        return AppState.metadata;

    }

};
