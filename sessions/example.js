// Example session: a 20-minute talk with a live demo, using every feature.
// Copy this file to sessions/<your-talk>.js and open ?session=<your-talk>.
// The format is documented in the README.

window.SESSION = {
  id: "example-20-minute-demo",
  title: "Ship it live: a 20-minute demo talk",
  event: "Example Conf, Main Stage",
  total: "20:00",
  neverCut: "Never cut the call to action or the thank-you.",

  settings: {
    onTimeSeconds: 20,
    badSeconds: 90,
    labels: ["Action", "Talk track", "Expected result", "Questions", "Note"],
  },

  booth: {
    title: "Call to the AV desk",
    call: "“Can you roll {name}?”",
    noMedia: "Nothing to roll",
  },

  sections: [
    {
      id: "welcome",
      step: "Welcome",
      length: "1:00",
      who: "Ana",
      what: "Who we are, what you'll leave with",
      notes: `Good morning! I'm Ana, and this is Ben.
In the next twenty minutes we'll build and ship a small feature, **live**, and show you the guardrails that make that safe.
(Point at Ben.) Ben is driving. I'll be asking him awkward questions.`,
    },
    {
      id: "problem",
      step: "The problem",
      length: "2:00",
      who: "Ana",
      what: "Why shipping fast usually means shipping blind",
      cutHint: "Skip the second story; go straight to the slide.",
      notes: `Hands up if you've ever shipped something on a Friday and regretted it.
(Pause. Raise your own hand.)
Two quick stories:
- The config change that took down checkout for **eleven minutes**.
- The dependency bump nobody reviewed because "it's just a patch release".
The common thread: **speed without feedback**.`,
    },
    {
      id: "d1",
      step: "1. Set up the project",
      length: "3:00",
      who: "Ben",
      what: "Scaffold, run the tests, show the green baseline",
      media: { status: "ready", file: "01 Setup.mp4", duration: "~45s", alt: "Or run it live if the network is good" },
      slide: "Ben's screen",
      notes: `Action: Ben scaffolds the project and runs the test suite.
> npm create example-app@latest my-app
> cd my-app && npm test
Expected result: **all green**. This is our baseline.
Talk track:
- Every demo should start from a known-good state. Ours is committed and tagged.
- The reset script puts us back here in about ten seconds.`,
    },
    {
      id: "d2",
      step: "2. Add the feature",
      length: "4:00",
      who: "Ben, Ana asks",
      what: "Implement the feature and watch the tests fail first",
      media: { status: "incoming", file: "02 Feature.mov", duration: "~2m, play at 1.5x" },
      slide: "Ben's screen",
      cutHint: "Play the video at 2x and skip the second question.",
      notes: `Action: Ben writes the failing test first, then the code.
Questions:
- **Why the test first, every time?**
- What do you do when the test is hard to write?
Expected result: one red test, then green after the change.
[If the live run stalls, ask the AV desk to roll 02 Feature]`,
    },
    {
      id: "d3",
      step: "3. Ship it",
      length: "2:30",
      who: "Ben",
      what: "Open the PR, let CI and review run",
      media: { status: "live", file: "", duration: "", alt: "No recording: show the screenshot of the green PR" },
      slide: "Ben's screen",
      cutHint: "Show the screenshot instead of waiting for CI.",
      notes: `> git switch -c feature/greeting && git commit -am "Add greeting" && git push
Expected result: CI starts, the reviewer bot leaves its first comment within a minute.
Note: if CI is slow, **don't wait**. Move on and come back to it.`,
    },
    {
      id: "qa",
      step: "Questions and vamping",
      length: "5:00",
      hardEnd: "17:30",
      who: "Both",
      what: "Audience questions; stretches or shrinks to end at 17:30",
      cutHint: "This section absorbs lateness. It ends at 17:30 whatever happens.",
      notes: `Okay, let's take some questions while CI finishes.
- **What would you set up on day one in a new repo?**
- Where do you still want a human in the loop?
- What's the guardrail people skip most often?
(Glance at the PR. If it's green, show it.)`,
    },
    {
      id: "cta",
      step: "Call to action",
      length: "1:00",
      who: "Ana",
      what: "Where to find the slides and code",
      neverCut: true,
      notes: `Everything you saw is in one repo, linked from the QR code on screen.
**Start with the reset script**, then try the demo yourself.`,
    },
    {
      id: "thanks",
      step: "Thanks",
      length: "1:00",
      who: "Both",
      what: "Wrap up",
      neverCut: true,
      notes: `Thank you! We'll be around at the break.
[Early? Press Q for filler questions]`,
    },
    {
      id: "buffer",
      step: "Buffer",
      length: "0:30",
      what: "Slack before the hard stop",
      isBuffer: true,
      notes: `(Buffer. Nothing planned.)`,
    },
  ],

  checkpoints: [
    {
      at: "6:00",
      section: "d1",
      label: "Demo started",
      ifBehind: "Skip the second story in the problem section.",
    },
    {
      at: "10:30",
      section: "d3",
      label: "Shipping started",
      ifBehind: "Play 02 Feature at 2x and drop to one question.",
    },
    {
      at: "17:30",
      section: "cta",
      label: "Call to action started",
      ifBehind: "Go to the call to action now.",
    },
  ],

  filler: `## About the work
- ★ **What's the most common mistake you see on a team's first day with this?**
- What would you tell someone who wants to ban it outright?
## Lightning round (one-word answers)
- Tabs or spaces?
- Monorepo or many repos?
- Friday deploys: yes or no?`,
};
