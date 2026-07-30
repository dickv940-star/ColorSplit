/*
=========================================
File Reader
=========================================
*/

const FileReaderEngine = {

    async open(file) {

        if (!file)
            throw new Error("File tidak ditemukan.");

        AppState.file = file;

        updateStatus("Reading file...");

        return file;

    }

};
