/**
 * Color History Engine v1.0
 * ColorSplit Pro
 */


const ColorHistory = {


    list:[],


    max:20,



    add(color){


        this.list.unshift(color);



        if(this.list.length >
        this.max){

            this.list.pop();

        }


        this.save();


    },



    get(){

        return this.list;

    },



    clear(){

        this.list=[];

        this.save();

    },



    save(){

        localStorage.setItem(

            "COLOR_HISTORY",

            JSON.stringify(
                this.list
            )

        );

    },



    load(){


        let data =
        localStorage.getItem(
            "COLOR_HISTORY"
        );


        if(data){

            this.list =
            JSON.parse(data);

        }


    }


};


window.ColorHistory =
ColorHistory;
