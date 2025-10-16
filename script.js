function functionName() {
    alert(arguments.callee.name);
}

// Example usage:
functionName();  // This will alert "functionName"

