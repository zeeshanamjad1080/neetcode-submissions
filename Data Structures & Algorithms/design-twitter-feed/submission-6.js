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
        const followList = this.followMap.get(userId) || new Set();
        const users = new Set([...followList, userId]);

        const heap = [];
        const feed = [];

        // Insert latest tweet from each user
        for (let id of users) {
            const tweets = this.postsMap.get(id);

            if (tweets && tweets.length > 0) {
                const index = tweets.length - 1;

                heap.push({
                    time: tweets[index].time,
                    tweetId: tweets[index].tweetId,
                    userId: id,
                    index,
                });
            }
        }

        // Build Max Heap using your existing heapDown()
        for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
            this.heapDown(i, heap);
        }

        // Extract at most 10 latest tweets
        while (heap.length > 0 && feed.length < 10) {
            // Remove maximum (newest tweet)
            const newest = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                this.heapDown(0, heap);
            }

            feed.push(newest.tweetId);

            // Insert next older tweet from same user
            const prevIndex = newest.index - 1;

            if (prevIndex >= 0) {
                const tweets = this.postsMap.get(newest.userId);
                const prevTweet = tweets[prevIndex];

                heap.push({
                    time: prevTweet.time,
                    tweetId: prevTweet.tweetId,
                    userId: newest.userId,
                    index: prevIndex,
                });

                this.heapUp(heap.length - 1, heap);
            }
        }

        return feed;
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

    heapUp(i, array) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (array[parent].time >= array[i].time) {
                break;
            }

            [array[parent], array[i]] = [array[i], array[parent]];

            i = parent;
        }
    }
}
