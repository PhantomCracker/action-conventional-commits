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
    "Update ",
    "Initial ",
    "initial "
];

const isValidCommitMessage = (message, availableTypes = DEFAULT_COMMIT_TYPES): boolean => {
    // Exceptions.
    // This is a message that's auto-generated by git. Can't do much about it unfortunately. Let's allow it.
    const isValid = ["Merge ", "Revert ", "Update ", "Initial "].some((word) => message.startsWith(word));
    if (isValid) {
        return true;
    }

    // Commit message doesn't fall into the exceptions group. Let's do the validation.
    let [possiblyValidCommitType] = message.split(":");
    possiblyValidCommitType = possiblyValidCommitType.toLowerCase();

    // Let's remove scope if present.
    if (possiblyValidCommitType.match(/\(\S*?\)/)) {
        possiblyValidCommitType = possiblyValidCommitType.replace(/\(\S*?\)/, "");
    }

    possiblyValidCommitType = possiblyValidCommitType
        .replace(/\s/g, "") // Remove all whitespace
        .replace(/\!/g, "") // Remove bang for notify breaking change
        .replace(/()/g, "") // Remove all whitespace
        .replace(/[^a-z]/g, ""); // Only leave [a-z] characters.

    return availableTypes.includes(possiblyValidCommitType);
};

export default isValidCommitMessage;
