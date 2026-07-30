/*
=========================================
Image Loader
=========================================
*/

const ImageLoader = {

    async load(file) {

        return new Promise((resolve) => {

            const img = new Image();

            img.onload = function () {

                AppState.image = img;

                AppState.metadata.width = img.width;

                AppState.metadata.height = img.height;

                AppState.metadata.aspectRatio =
                    ImageLoader.ratio(img.width, img.height);

                resolve(img);

            };

            img.src = URL.createObjectURL(file);

        });

    },

    ratio(w, h) {

        function gcd(a, b) {

            return b ? gcd(b, a % b) : a;

        }

        let d = gcd(w, h);

        return (w / d) + " : " + (h / d);

    }

};
