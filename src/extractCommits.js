const get = require("lodash.get");
const got = require("got");

const extractCommits = async (context, core) => {
    const pushCommits = Array.isArray(get(context, "payload.commits"));
    if (pushCommits) {
        return context.payload.commits;
    }

    const prCommitsUrl = get(context, "payload.pull_request.commits_url");
    if (prCommitsUrl) {
        try {
            let requestHeaders = {
                Accept: "application/vnd.github+json",
            };
            if (core.getInput("GITHUB_TOKEN") !== "") {
                requestHeaders["Authorization"] =
                    "token " + core.getInput("GITHUB_TOKEN");
            }
            const { body } = await got.get(prCommitsUrl, {
                responseType: "json",
                headers: requestHeaders,
            });

            if (Array.isArray(body)) {
                return body.map((item) => item.commit);
            }
            return [];
        } catch {
            return [];
        }
    }

    return [];
};

module.exports = extractCommits;
