var passwordValidator = function (password, options) {
    var validators = {},
        result = {},
        valid = true;

    if (options.minLength) {
        validators.minLength = new RegExp('(.{' + options.minLength + ',})');
    }

    if (options.character) {
        validators.character = /[a-zA-Z]/;
    }

    if (options.digit) {
        validators.digit = /\d/;
    }

    if (options.upperCase) {
        validators.upperCase = /[A-Z]/;
    }

    if (options.symbol) {
        validators.symbol = /\W+/;
    }

    for (var validatorName in validators) {
        result[validatorName] = validators[validatorName].test(password);
        valid = valid && result[validatorName];
    }

    return {
        valid: valid,
        options: result
    }
};

module.exports = passwordValidator;