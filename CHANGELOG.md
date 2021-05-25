# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2021-05-25

### Chore

- Moving from Snowpack to Vite
- Using stimulus and lodash.throttle as external libraries reducing bundle size from `109.79kb` to `0.54kb`.
- Moving to TypeScript
- Upgrading Node to 14.17.0

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property

```diff
- <div data-controller="scroll-progress" data-scroll-progress-throttle-delay="100">
+ <div data-controller="scroll-progress" data-scroll-progress-throttle-delay-value="100">
```

## [1.0.1] - 2020-11-11

### Changed
- Removing console.log

## [1.0.0] - 2020-11-11

### Added

- Adding controller
