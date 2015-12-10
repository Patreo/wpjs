module Wpjs {
    export class Posts {
        private m_data: Post[];
        private m_wpjs: Wordpress;
        /**
         * Constructor for Posts object
         * 
         * @param {Wordpress} wpjs
         * @param {PostModel} data
         */
        constructor(wpjs: Wordpress, data: Post[]) {
            this.m_data = data;
            this.m_wpjs = wpjs;
        }

        get data(): Post[] {
            return this.m_data;
        }

        public save(post: Post): void {
            post.save();
        }

        public remove(post: Post): void {
            post.remove();
        }
    }
} 