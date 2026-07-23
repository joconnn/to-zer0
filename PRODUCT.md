# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A single user uses Target to Zero as personal software while studying. They set a target duration for a study goal and record completed study time until the remaining duration reaches zero.

## Product Purpose

Target to Zero makes study progress concrete by representing each goal as a finite amount of time that can be deducted after each study session. Success means reducing a goal's remaining minutes to zero.

## Positioning

Instead of accumulating elapsed time, Target to Zero frames study work as depleting a goal's remaining time, like reducing a health bar in a video game.

## Operating Context

The user creates goals with durations measured in minutes, studies, and then deducts completed minutes from the relevant goal. All interaction should be possible using only a keyboard.

## Capabilities and Constraints

- Create a study goal with a title and target duration in minutes.
- Deduct completed study minutes without allowing the remaining duration to fall below zero.
- Delete goals.
- Persist data locally in the browser only; no account, synchronization, or remote storage.
- Preserve the established term “goal” and use minutes consistently.

## Brand Commitments

- Product name: Target to Zero.
- The interface should evoke a retro video game.
- Each goal card should represent remaining time with a health bar that depletes toward zero.

## Evidence on Hand

The existing React application in `src/` is the only product implementation. No testimonials, usage benchmarks, customer claims, or external brand assets exist and future work must not fabricate them.

## Product Principles

- Make remaining study effort immediately legible.
- Treat reaching zero as meaningful completion.
- Keep the workflow fast and fully keyboard-operable.
- Keep personal study data private and local.
- Use game mechanics to reinforce progress without complicating the task.

## Accessibility & Inclusion

Every feature and interaction must be operable by keyboard, with visible focus and clear controls.
