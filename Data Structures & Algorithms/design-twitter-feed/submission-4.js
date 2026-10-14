class Twitter {
    constructor() {
        this.followMap = new Map();
        this.postsMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let user = this.postsMap.get(userId);
        if (user) {
            user.push({
                time: this.time++,
                tweetId,
            });
        } else {
            this.postsMap.set(userId, [
                {
                    time: this.time++,
                    tweetId,
                },
            ]);
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let followList = this.followMap.get(userId) || [];
        let posts = [];

        for (let id of [...followList, userId]) {
            let postArray = this.postsMap.get(id);
            if (postArray && postArray.length) {
                posts.push(...postArray);
            }
        }

        posts.sort((a, b) => b.time - a.time);
        if (posts.length > 10) {
            posts = posts.slice(0, 10);
        }

        for (let i = Math.floor((posts.length - 1) / 2); i >= 0; i--) {
            this.heapDown(i, posts);
        }

        return posts.map((tweet) => tweet.tweetId);
    }

    heapDown(i, array) {
        let n = array.length;
        while (true) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let max = i;

            if (left < n && array[max].time < array[left].time) max = left;
            if (right < n && array[max].time < array[right].time) max = right;
            if (max === i) break;

            [array[max], array[i]] = [array[i], array[max]];

            i = max;
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followeeId === followerId) return;
        let followList = this.followMap.get(followerId);

        if (followList) {
            followList.add(followeeId);
        } else {
            let followSet = new Set();
            followSet.add(followeeId);
            this.followMap.set(followerId, followSet);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        let followList = this.followMap.get(followerId);

        if (followList) {
            followList.delete(followeeId);
        }
    }
}
