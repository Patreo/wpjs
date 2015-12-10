module Wpjs {
    export class Post implements IStorageObject {
        private m_data: PostModel;
        private m_wpjs: Wordpress;
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