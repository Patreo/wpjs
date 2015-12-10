module Wpjs {
   
    export class Wordpress {       
        private baseUrl: string;
        private nonce: string;
        private req: XMLHttpRequest = null;

        /**
         * Constructor for Wpjs object
         * 
         * @param {Any} options
         */
        constructor(options: { baseUrl: string; nonce?: string; }) {
            this.baseUrl = options.baseUrl;

            if (options.nonce) {
                this.nonce = options.nonce;
            }            
        }

        /**
         * Get url for call Json methods
         * 
         * @param {String} command
         */
        public getJsonURL(command): string {
            return this.baseUrl + "/wp-json/wp/v2/" + command;
        }

        /**
         * Get a AJAX request for a url specified
         * 
         * @param {String} type
         * @param {String} url
         * @param {Any} callback
         * @param {String} responseType
         */
        public xhr(type: string, url: { url: string; data?: string; }, callback: (response: string, error: Error) => void, responseType?: string): void {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (() => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    if (responseType) {
                        callback(xhr.response, null);
                    } else {
                        callback(xhr.responseText, null);
                    }
                    
                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    callback(null, this.generateError(xhr));
                }
            });

            if (responseType) {
                xhr.responseType = responseType;
            }

            if (type != "GET") {
                xhr.setRequestHeader('X-WP-Nonce', this.nonce);
            }

            xhr.open(type, url.url);

            if (url.data) {
                xhr.send();
            } else {
                xhr.send(url.data);
            }            
        }

        /**
         * Generate Error class for error happened in 
         * XMLHttpRequest
         * 
         * @param {XMLHttpRequest} xhr
         */
        private generateError(xhr: XMLHttpRequest): Wpjs.Error {
            var response = new Error(xhr.status, xhr.statusText, "");
            if (xhr.responseType === '' || xhr.responseType === 'text') {
                response.text = xhr.responseText;
            }

            return response;
        }

        public posts(args: { context?: string; page?: number; per_page?: number; filter?: string },
            callback: (posts: Posts, error: Error) => void): void {

            if (!args.context) {
                args.context = "view";
            }

            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }


        }

        public pages(args: { context?: string; page?: number; per_page?: number; filter?: string },
            callback: (posts: Posts, error: Error) => void): void {

            if (!args.context) {
                args.context = "view";
            }

            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }


        }

        public media(args: { context?: string; page?: number; per_page?: number; filter?: string },
            callback: (posts: Posts, error: Error) => void): void {

            if (!args.context) {
                args.context = "view";
            }

            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }


        }

        public types(args: { post_type?: string },
            callback: (posts: Posts, error: Error) => void): void {
            
        }

        public taxonomies(args: { post_type?: string },
            callback: (posts: Posts, error: Error) => void): void {

        }

        public statuses(callback: (posts: Posts, error: Error) => void): void {

        }

        public categories(args: { page?: number; per_page?: number; search?: string; context?: string; order?: string; orderby?: string; hide_empty?: boolean; parent?: number },
            callback: (posts: Posts, error: Error) => void): void {

            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }

            if (!args.context) {
                args.context = "view";
            }

            if (!args.order) {
                args.order = "asc";
            }

            if (!args.orderby) {
                args.orderby = "nane";
            }
        }


        public users(args: { page?: number; per_page?: number; search?: string; context?: string; order?: string; orderby?: string },
            callback: (posts: Posts, error: Error) => void): void {

            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }

            if (!args.context) {
                args.context = "view";
            }

            if (!args.order) {
                args.order = "asc";
            }

            if (!args.orderby) {
                args.orderby = "nane";
            }
        }

        public comments(args: { context?: string; page?: number; per_page?: number; search?: string; author_email?: string; karma?: number; parent?: number; post?: number; post_author?: string; post_slug?: string; post_status?: string; post_type?: string; status?: string; type?: string; user?: string },
            callback: (posts: Posts, error: Error) => void): void {
          
            if (!args.page) {
                args.page = 1;
            }

            if (!args.per_page) {
                args.per_page = 10;
            }

            if (!args.status) {
                args.status = "approve";
            }

            if (!args.type) {
                args.type = "comment";
            }

        }

        /**
         * Get Posts from Url request
         *
         * @param {Callback} callback
         */
        public getPosts(callback: (posts: Array<Post>, error: Error) => void): void {
            this.xhr("GET", {
                url: this.getJsonURL("posts")
            }, ((result: string, errorGet: Error) => {
                if (errorGet) {
                    callback(null, errorGet);
                }

                var postResult = JSON.parse(result);
                var posts = new Posts(this, postResult.map(o => {
                    return new Post(this, o);
                }));

                callback(posts.data, null)
            }));
        }

         /**
         * Get Post Metadata from Post Url request
         *
         * @param {Number} id
         * @param {Callback} callback
         */
        public getPostMeta(id: number, callback: (metadata: Array<PostMetaModel>, error: Error) => void): void {
            var url: string = this.getJsonURL("posts/" + id + "/meta");

            this.xhr("GET", {
                url: url
            }, ((result: string, errorGet: Error) => {
                if (errorGet) {
                    callback(null, errorGet);
                }

                var postMetaResult = JSON.parse(result);
                var postMeta = new PostMeta(this, postMetaResult.map(o => {
                    var model = new PostMetaModel();
                    model.id = o.id;
                    model.key = o.key;
                    model.value = o.value;

                    return model;
                }));

                callback(postMeta.data, null)
            }));
        }
    }
}