document.getElementById("fileInput").onchange = async function () {

    if (!this.files.length)
        return;

    showPage("loading");

    const file = this.files[0];

    await FileReaderEngine.open(file);

    await MetadataReader.read(file);

    await ImageLoader.load(file);

    await ColorDetector.detect();

    showPage("workspace");

    PreviewLoader.draw();

};
