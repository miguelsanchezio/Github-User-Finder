class GitHub {
    constructor() {
        this.client_id = '02a65db1723204421745';
        this.client_secret = 'a65c3905ff1fbd2680cde8ec6101d788684102cb';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}