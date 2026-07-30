function showPage(name){

    AppState.page = name;

    switch(name){

        case "home":
            renderHome();
            break;

        case "loading":
            renderLoading();
            break;

        case "workspace":
            renderWorkspace();
            break;

    }

}
