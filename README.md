# sap-webapp

Simple web app with

- HTML
- CSS
- JS
  - [WASM](https://webassembly.org/)

WASM is created by https://webassembly.studio/ from c-source:

```c
#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int answerWASM() {
  return 42;
}
```

compiled to WASM/WAT:

```
(module
  (type $t0 (func))
  (type $t1 (func (result i32)))
  (func $__wasm_call_ctors (type $t0))
  (func $answerWASM (export "answerWASM") (type $t1) (result i32)
    i32.const 42)
  (table $T0 1 1 anyfunc)
  (memory $memory (export "memory") 2)
  (global $g0 (mut i32) (i32.const 66560))
  (global $__heap_base (export "__heap_base") i32 (i32.const 66560))
  (global $__data_end (export "__data_end") i32 (i32.const 1024)))
```