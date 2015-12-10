/// <reference path="Models.ts" />
/// <reference path="Wpjs.ts" />

module Wpjs {
    export class Post {
        private m_data: PostModel;
        private m_wpjs: Wpjs.Wordpress;
        /**
        * Constructor for Post object
        * 
        * @param {Wordpress} wpjs
        * @param {PostModel} data
        */
        constructor(wpjs: Wordpress, data: PostModel) {
            this.m_data = data;
            this.m_wpjs = wpjs;
        }

        /**
         * Get PostModel data 
         * property
         */
        get data(): PostModel {
            return this.m_data;
        }

        public save(): void {
            var type: string;
            var url: string;

            if (!this.m_data.id) {
                type = "POST";
            } else {
                type = "PUT";
            }

            this.m_wpjs.xhr(type, {
                url: url,
                data: JSON.stringify({
                    date: this.m_data.date,
                    date_gmt: this.m_data.date_gmt,
                    modified: this.m_data.modified,
                    modified_gmt: this.m_data.modified_gmt,
                    password: this.m_data.password,
                    slug: this.m_data.slug,
                    status: this.m_data.status,
                    title: this.m_data.title,
                    content: this.m_data.content,
                    author: this.m_data.author,
                    excerpt: this.m_data.excerpt,
                    featured_image: this.m_data.featured_image,
                    comment_status: this.m_data.comment_status,
                    ping_status: this.m_data.ping_status,
                    format: this.m_data.format,
                    sticky: this.m_data.sticky,
                })
            }, ((response: string, error: Error) => {


                }));
        }

        public remove(): void {

        }

        /**
         * Get Metadata from current post item
         * 
         * @param {Callback} callback
         */
        public meta(callback: (values: Array<PostMetaModel>, error: Error) => void): void {
            this.m_wpjs.getPostMeta(this.m_data.id, callback);
        }
    }

}  