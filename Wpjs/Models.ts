module Wpjs {
    export enum Status {
        publish,
        future,
        draft,
        pending,
        private
    }

    export class ContentModel {
        public date: string;
        public date_gmt: string;
        public guid: string;
        public id: number;
        public link: string;
        public modified: string;
        public modified_gmt: string;
        public password: string;
        public slug: string;
        public status: string;
        public type: string;
        public title: string;
        public author: string;
        public comment_status: string;
        public ping_status: string;
    }

    export class PostModel extends ContentModel {
        public content: string;
        public excerpt: string;
        public featured_image: string;
        public format: string;
        public sticky: string;
    }

    export class PostMetaModel {
        public id: number;
        public key: string;
        public value: string;
    }

    export class PostTermModel {
        public order: string;
        public orderby: string;

        constructor() {
            this.order = "asc";
            this.orderby = "name";
        }
    }

    export class RevisionModel {
        public author: number;
        public date: string;
        public date_gmt: string;
        public id: string;
        public modified: string;
        public modified_gmt: string;
        public parent: number;
        public slug: string;
        public title: string;
        public content: string;
        public excerpt: string;
    }

    export class PageModel extends ContentModel {
        public content: string;
        public excerpt: string;
        public featured_image: string;
        public parent: number;
        public menu_order: number;
        public template: string;
    }

    export class MediaModel extends ContentModel {
        public alt_text: string;
        public caption: string;
        public description: string;
        public media_type: string;
        public media_details: any;
        public post: number;
        public source_url: string;
    }

    export class PostTypeModel {
        public description: string;
        public hierarchical: boolean;
        public labels: any;
        public name: string;
        public slug: string;
    }

    export class PostStatusModel {
        public name: string;
        public private: boolean;
        public protected: boolean;
        public public: boolean;
        public queryable: boolean;
        public show_in_list: boolean;
        public slug: string;
    }

    export class CommentModel {
        public id: number;
        public author: number;
        public author_avatar_urls: any;
        public author_email: string;
        public author_ip: string;
        public author_name: string;
        public author_url: string;
        public author_user_agent: string;
        public content: any;
        public date: string;
        public date_gmt: string;
        public karma: number;
        public link: string;
        public parent: number;
        public post: number;
        public status: string;
        public type: string;
    }

    export class TaxonomyModel {
        public description: string;
        public hierarchical: boolean;
        public labels: any;
        public name: string;
        public slug: string;
        public show_cloud: boolean;
        public types: Array<PostTypeModel>;
    }

    export class TermModel {
        public id: number;
        public counter: number;
        public description: string;
        public link: string;
        public slug: string;
        public name: string;
        public taxonomy: string;
        public parent: number;
    }

    export class UserModel {
        public avatar_urls: any;
        public capabilities: any;
        public description: string;
        public email: string;
        public extra_capabilities: any;
        public first_name: string;
        public last_name: string;
        public id: number;
        public link: string;
        public name: string;
        public nickname: string;
        public registered_date: string;
        public roles: Array<string>;
        public role: string;
        public slug: string;
        public url: string;
        public username: string;
    }
}