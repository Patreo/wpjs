/// <reference path="Models.ts" />
/// <reference path="Wpjs.ts" />

module Wpjs {
    export class PostMeta {
        private m_data: PostMetaModel[];
        private m_wpjs: Wordpress;

        /**
         * Constructor for Posts object
         * 
         * @param {Wordpress} wpjs
         * @param {PostModel} data
         */
        constructor(wpjs: Wordpress, data: PostMetaModel[]) {
            this.m_data = data;
            this.m_wpjs = wpjs;
        }

        get data(): PostMetaModel[] {
            return this.m_data;
        }
    }
}  