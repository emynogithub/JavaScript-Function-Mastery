# An introduction to Javascript

* Programming is an art of writing clear and precise instructions for computers.

NB: Human language is ambiguous(not clear). Programming language must be precise.

### 3 ways to run Javascript

1. **Browser console** - Quick tests
2. **Node.js(.js file)** - termial/server
3. script> tag- web tag

### null vs undefined
- **undefined**: Variable exist but has no value(accidental emptiness)
- **null**: Explicitly empty(international emptiness)

NB: Quirky JS behavior(unexpected behavior): e.g typeof null = "Object"

### Variable declaration

- Use **const** by default
- Switch to **let** if reassignment needed
- Avoid **var**

The fullname of **v8** is simply **Google v8 javascript engine**

### Logical Operators

- **&&**: Both must be true
- **||**: At least one time

### Two types of language

- **Low-level**: 
   - **Binary(Machine language)**: **0s and 1s**, directly understood by the CPU
- **Assembly Language**: Uses mnemonics, slightly easier for humans, need an assembler. They called low-level because they are closer to the hardware

### High-level language

- Easier for humans to read and write
- E.g: Javascript, python, C, java etc
- Called high-level because they are closer to human language, farther from hardware.

### Compiler vs interpreter

- **Compiler** - runs entire code at once e.g C, C++, Java, Go, Rust
- **Interpreter** - runs line by line e.g python, Javascript, Ruby, PHP.

### Difference engines have different codenames

1. **v8** - in chrome, Opera, and Edge
2. **SpiderMonkey** - in firefox

NB: v8 is a Javascript engine that both interpretes and compiles javascript code. It first interprets the code to start execution quickly, and then compiles frequently used parts into optimized machine code for better performance.

