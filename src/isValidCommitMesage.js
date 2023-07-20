const DEFAULT_COMMIT_TYPES = [
    "feat",
    "fix",
    "docs",
    "style",
    "refactor",
    "test",
    "build",
    "perf",
    "ci",
    "chore",
    "revert",
    "merge",
    "update",
    "wip",
];

const isValidCommitMessage = (message, availableTypes = DEFAULT_COMMIT_TYPES) => {
    const isValid = [
        "Merge ",
        "Revert ",
        "Update ",
        "Initial commit",
    ].some((word) => message.startsWith(word));
    if (isValid) {
        return true;
    }

    let [possiblyValidCommitType] = message.split(":");
    possiblyValidCommitType = possiblyValidCommitType.toLowerCase();

    if (possiblyValidCommitType.match(/\(\S*?\)/)) {
        possiblyValidCommitType = possiblyValidCommitType.replace(/\(\S*?\)/, "");
    }

    possiblyValidCommitType = possiblyValidCommitType
        .replace(/\s/g, "")
        .replace(/\!/g, "")
        .replace(/()/g, "")
        .replace(/[^a-z]/g, "");

    return availableTypes.includes(possiblyValidCommitType);
};

module.exports = isValidCommitMessage;
