#!/bin/bash
# Find functions that create new instances on every render
grep -n "const .* = () => {" patron-finans/src/App.jsx
