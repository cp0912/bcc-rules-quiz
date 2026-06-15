// ============================================================
// BCC Rules Quiz — Quiz Data File
// Ver 2.1 (Jun 2026)
// ============================================================

const QUIZ_CONFIG = {
  title:    "Beltway Cricket Community Rules Quiz",
  subtitle: "Test your knowledge of the BCC Rule Book.",
  linkText: "BCC Rule Book",
  linkUrl:  "https://docs.google.com/document/d/1TQzDJw0btwcZ_Pmzb8CubpN1rHnaN-Kk",

  questions: [

    // ── WIDE BALLS (Rule 6) ──────────────────────────────────


    {
      s: 'Wide Balls',
      q: 'On the off side, the ball lands exactly on the wide line mark. What is the umpire\'s call?',
      opts: ['Always a wide — the ball is on the line', 'Not a wide — the ball must be fully outside the line to be called wide', 'The umpire\'s judgment call; the line belongs to the umpire', 'Dead ball — the umpire must reset'],
      ans: 1,
      ex: 'Rule 6.2: On the off side, if the ball is outside the wide line mark it should be called a wide. A ball on the line should NOT be called a wide ball.'
    },
    {
      s: 'Wide Balls',
      q: 'A batsman moves towards the off side during a delivery. How does this affect the wide line?',
      opts: ['The wide line stays fixed regardless of batsman movement', 'The wide line moves further away from the stumps (in the direction the batsman moved)', 'The wide line moves closer to the stumps', 'The umpire resets the wide line after every ball'],
      ans: 1,
      ex: 'Rule 6.3: The wide line moves with the batsman and can only move away from the stumps. If the batsman moves to the off side, the wide line moves further away. If the batsman moves to the leg side, the wide line stays where it is.'
    },
    {
      s: 'Wide Balls',
      q: 'A batsman moves to the leg side. What happens to the wide line?',
      opts: ['The wide line moves closer to the stumps', 'The wide line moves further away from the stumps', 'The wide line stays where it is', 'The delivery is automatically called a wide'],
      ans: 2,
      ex: 'Rule 6.3: The wide line can only move away from the stumps. If the batsman moves to the leg side, the wide line stays where it is — it does not follow the batsman towards the stumps.'
    },
    {
      s: 'Wide Balls',
      q: 'A striker attempts a switch hit. The ball goes outside his original leg stump but stays inside the wide line mark on his original leg side. What is the call?',
      opts: ['Wide — the ball passed the batter\'s new leg stump', 'Not a wide', 'Wide — because the batter moved', 'Dead ball — switch hit is not permitted'],
      ans: 1,
      ex: 'Rule 6.4: For a switch hit, wide ball is judged based on the wide line marks on both sides and the batsman\'s movement. If the ball goes outside the original leg stump but is inside the wide line mark on the original leg side, it shall NOT be judged a wide.'
    },
    {
      s: 'Wide Balls',
      q: 'A striker attempts a switch hit and moves towards the wide line. The ball goes outside his original off-side wide line mark. What is the correct call?',
      opts: ['Automatically a wide', 'Not a wide — batter moved so wide line moves with him', 'The umpire\'s judgment call — wide if batter stayed put, not wide if batter moved towards the wide line', 'No ball'],
      ans: 2,
      ex: 'Rule 6.4: If the ball goes outside the original off-side wide line mark, it is the umpire\'s judgment call — called wide if the batsman stayed in the same place, but if the batsman moved towards the wide line, the wide line also moves.'
    },

    // ── NO BALL — Front Foot (Rule 7.1) ─────────────────────

    {
      s: 'No Ball',
      q: 'A bowler\'s front foot lands with part of the foot on the popping crease line but nothing behind it. What is the call?',
      opts: ['Legal delivery — part of the foot is on the line', 'No ball', 'Wide ball', 'Dead ball'],
      ans: 1,
      ex: 'Rule 7.1.2: If a part of the front foot is on the line but nothing is behind the line, it should be called a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'A bowler delivers the ball from behind the bowling crease (non-striker stump line). What is the correct call?',
      opts: ['No ball — bowler must deliver from behind the popping crease only', 'No ball — the delivery must pass over the popping crease', 'Not a no ball — bowling from behind the bowling crease is permitted', 'Dead ball'],
      ans: 2,
      ex: 'Rule 7.1.3: Bowlers may bowl from behind the bowling crease (non-striker stump line). This is not a No Ball.'
    },

    // ── NO BALL — Back Foot (Rule 7.2) ──────────────────────

    {
      s: 'No Ball',
      q: 'A bowler\'s back foot lands clearly outside the return crease (which is clearly marked). What should be called?',
      opts: ['Legal delivery — only the front foot matters', 'No ball', 'Wide ball', 'Dead ball'],
      ans: 1,
      ex: 'Rule 7.2.1: The bowler\'s back foot must land with no part of the foot on or outside the return crease when it is clearly marked. Landing outside the return crease is a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'The return crease is not marked on the pitch. The bowler\'s back foot lands outside the edge of the pitch (parallel to where the return crease would be). What is the call?',
      opts: ['Legal — no return crease marked means no restriction', 'No ball', 'Wide ball', 'Umpire\'s discretion only'],
      ans: 1,
      ex: 'Rule 7.2.1.2: If the return crease is not clearly marked, the bowler\'s back foot must not land on or outside the edge of the pitch that is parallel to the return crease. Violation is a No Ball.'
    },

    // ── NO BALL — Height Related (Rule 7.3) ─────────────────

    {
      s: 'No Ball',
      q: 'A batter steps outside the popping crease to hit a full toss. The umpire believes the ball would have been above waist height had the batter stayed at the crease. What should be called?',
      opts: ['Not a no ball — the batter moved', 'Wide ball', 'No ball — the umpire approximates the height at the crease; no balls cannot be denied because the batter stepped out', 'Dead ball'],
      ans: 2,
      ex: 'Rule 7.3.1: If a batter steps outside the crease, the leg umpire should approximate where the ball would have passed had the batter been at the popping crease. No balls cannot be denied simply because a batsman stepped outside the crease.'
    },
    {
      s: 'No Ball',
      q: 'A bowler has already received an official warning for a bouncer between the striker\'s shoulder and top of the head. He bowls a second such bouncer in the same over. What is the call?',
      opts: ['Wide ball', 'No ball', 'Dead ball with another warning', 'Legal — one bouncer per over is a guideline only'],
      ans: 1,
      ex: 'Rule 7.3.2: One bouncer between shoulder and top of head is allowed per over, but the umpire must give a warning after the first. If a second such bouncer is bowled in the same over after the warning, it is a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'A bowler bowls a ball without it bouncing and the umpire decides it was dangerously close to the striker\'s head/face. What should the umpire call it?',
      opts: ['Wide ball', 'Dead ball', 'No ball (beamer), and the bowler receives a warning', 'Legal delivery'],
      ans: 2,
      ex: 'Rule 7.3.3: If the ball is bowled without bouncing and the umpire decides it was dangerously close to the striker\'s head/face, it is a beamer and should be called a No Ball. The bowler receives a warning. If the same bowler bowls two beamers in the same innings, they may no longer bowl in that innings.'
    },
    {
      s: 'No Ball',
      q: 'A ball passes above the striker\'s head height (standing upright at the popping crease) without bouncing. It is NOT the second bouncer of the over. What is the correct call?',
      opts: ['No ball', 'Wide', 'Dead ball', 'Legal delivery'],
      ans: 1,
      ex: 'Rule 7.3.4: Any ball passing above head height should be called a Wide (not a No Ball), unless it is the second bouncer of the over (in which case it is a No Ball).'
    },
    {
      s: 'No Ball',
      q: 'A ball passes above the striker\'s head height but the batter swings and makes contact. What is the call?',
      opts: ['Wide — the ball was above head height regardless', 'No ball', 'Not a wide — the batter hit it, so it is treated as a legal delivery (bouncer)', 'Dead ball'],
      ans: 2,
      ex: 'Rule 7.3.5: If the batsman hits such a ball, it is not called a wide — it will be considered a bouncer.'
    },
    {
      s: 'No Ball',
      q: 'The leg umpire calls "Wide" first. Moments later the main umpire calls "No Ball" for the same delivery. What is the correct outcome?',
      opts: ['Wide stands — the first call wins', 'Both Wide and No Ball are counted', 'No Ball overrides — the Wide call is revoked and No Ball is counted', 'Dead ball — conflicting calls cancel each other'],
      ans: 2,
      ex: 'Rule 7.3.6: A call for No Ball will override a call for a Wide ball. Even if the No Ball call comes after the Wide call, the No Ball should be counted and the Wide call revoked.'
    },

    // ── NO BALL — Uncommon Scenarios (Rule 7.4) ─────────────

    {
      s: 'No Ball',
      q: 'During his delivery stride, a bowler accidentally breaks the non-striker\'s end stumps and then delivers the ball. What should be called?',
      opts: ['Dead ball — stumps are broken', 'No ball', 'Legal delivery — breaking stumps in the stride is common', 'Wide ball'],
      ans: 1,
      ex: 'Rule 7.4.1: If a bowler breaks the non-striker\'s end stumps in the delivery stride and then delivers the ball, it should be called a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'A fielder makes audible noise after the bowler starts his run-up. It is the first such occurrence in the match. What should happen?',
      opts: ['No ball immediately', 'Warning to the entire team; a no ball is called only on a subsequent offence', 'Dead ball — play must be restarted', 'Penalty runs awarded to the batting team'],
      ans: 1,
      ex: 'Rule 7.4.4: The ball should be called a No Ball after 1 warning to the entire team. The first offence earns a warning; a No Ball follows if it happens again.'
    },
    {
      s: 'No Ball',
      q: 'The fielding captain places 6 fielders on the leg side. The ball is bowled. What is the call?',
      opts: ['Legal — there is no limit on leg-side fielders', 'No ball — more than 5 fielders on the leg side is not permitted', 'Wide ball', 'Dead ball — rearrange the field first'],
      ans: 1,
      ex: 'Rule 7.4.5: If more than 5 fielders are fielding on the leg side of the batsman, the ball should be called a No Ball. There is no limit on how many fielders can be placed on the off side.'
    },
    {
      s: 'No Ball',
      q: 'During a non-power play over, the fielding team has 6 fielders outside the inner circle when the ball is bowled. What is the call?',
      opts: ['Legal — fielder restrictions only apply during power plays', 'No ball', 'Wide ball', 'Dead ball with a team warning'],
      ans: 1,
      ex: 'Rule 7.4.7: If more than 5 fielders are placed outside the inner circle during non-power play overs at the time a ball is bowled, the ball should be called a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'After the bowler commences his run-up, the wicketkeeper makes a significant lateral (sideways) movement before the ball reaches the striker. What should be called?',
      opts: ['Legal — keepers can reposition at any time', 'Wide ball', 'No ball', 'Dead ball'],
      ans: 2,
      ex: 'Rule 7.4.8: The wicketkeeper is not allowed to make significant lateral movement after the bowler starts his run-up and before the ball reaches the striker. If the umpire determines this occurred, the delivery shall be declared a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'A bowler delivers the ball underarm along the ground. What is the call?',
      opts: ['Legal — underarm bowling is permitted in BCC', 'Wide ball', 'Dead ball', 'No ball'],
      ans: 3,
      ex: 'Rule 7.4.13: Underarm bowling should be considered a No Ball.'
    },
    {
      s: 'No Ball',
      q: 'A ball bounces twice before reaching the stumps and is not a No Ball or Wide under any other rule. What should be called?',
      opts: ['No ball — double bounce is always a no ball', 'Wide ball', 'No ball', 'Legal delivery'],
      ans: 2,
      ex: 'Rule 7.4.14: Under the updated Ver 2.1 rules, a ball that bounces two or more times before reaching the stumps is now classified as a No Ball (not a Dead Ball as in the previous version), unless it qualifies as a Wide under the applicable rules.'
    },
    {
      s: 'No Ball',
      q: 'A batsman is stumped off a No Ball. The batsman did not attempt to run. What is the correct decision?',
      opts: ['Out — stumping is always valid', 'Not out — stumping is not allowed on a No Ball unless the batsman attempts a run and is run out', 'Dead ball — replay the delivery', 'Out — the No Ball only adds a run, not immunity'],
      ans: 1,
      ex: 'Rule 7 (NOTE): Stumping is not allowed on a No Ball unless the batsman attempts to run and is run out. Stumping (wicketkeeper collecting directly from the bowler) is not a valid dismissal on a No Ball.'
    },

    // ── DEAD BALL (Rule 8) ──────────────────────────────────

    {
      s: 'Dead Ball',
      q: 'When does the ball become dead according to BCC rules?',
      opts: ['When the ball reaches the wicketkeeper', 'When the batsman leaves the crease', 'Once the umpire signals the end of the over', 'When the bowler starts his run-up for the next delivery'],
      ans: 2,
      ex: 'Rule 8.1: The ball becomes dead once the umpire signals the end of the over.'
    },

    // ── PENALTY RUNS (Rule 9) ────────────────────────────────

    {
      s: 'Penalty Runs',
      q: 'A ball in play hits a water bottle that was left near the stumps. What is the correct ruling?',
      opts: ['5 penalty runs to the batting team', 'Dead ball — replay the delivery', 'No penalty — passive objects already on the field do not attract 5-run penalties', 'Wide ball'],
      ans: 2,
      ex: 'Rule 10.1: There is NO 5-run penalty if the ball while still in play hits any passive object already present on the field (water bottle, cone, flags, clothing etc.). However, the umpire should ensure such objects are removed or kept where the ball rarely goes.'
    },
    {
      s: 'Penalty Runs',
      q: 'A fielder intentionally uses a cap (not on his head) to obstruct the ball. What is the ruling?',
      opts: ['No penalty — only the stumps can obstruct the ball', 'Dead ball with a warning', '5 penalty runs awarded to the batting team as byes', 'Wide ball'],
      ans: 2,
      ex: 'Rule 10.2: Intentionally obstructing the ball with a foreign object (e.g. cap, hat, glove not on the hand) by the fielding side results in 5 penalty runs awarded to the batting team as byes.'
    },
    {
      s: 'Penalty Runs',
      q: 'While attempting a run out, the fielder\'s throw hits a water bottle on the pitch and then strikes the stumps. The batsman is short of his crease. What is the correct decision?',
      opts: ['Not out — the ball hit a passive object first', '5 penalty runs; batsman is not out', 'Run out — the batsman should be given out', 'Dead ball — foreign object on pitch cancels the play'],
      ans: 2,
      ex: 'Rule 10.2: While attempting a run out, if the ball hits a passive object first and then hits the stumps with the batsman short of his crease, the batsman should be given run out. The passive object does not protect the batsman.'
    },
    {
      s: 'Penalty Runs',
      q: 'Spring stumps are in use. The ball hits only the base of the spring stumps but does not hit the actual stumps or bails. The bails come off due to the impact. Is the batsman out?',
      opts: ['Out — the bails came off', 'Not out — the ball must hit the stumps or bails directly, not just the base', 'Out — umpire\'s discretion', 'Dead ball — spring stumps are invalid for dismissals'],
      ans: 1,
      ex: 'Rule 9.3.2: If the ball hits only the base but does not hit the stumps/bails, the batsman should not be given out even if the bails come off or stumps move. Umpire\'s call is final in determining whether the ball hit just the base or the stumps/bails.'
    },
    {
      s: 'Penalty Runs',
      q: 'Spring stumps are in use. The ball first hits the base and then hits the stumps/bails, with the batsman outside the crease. What is the decision?',
      opts: ['Not out — the ball hit the base first', 'Out — the batsman should be declared out since the ball hit the stumps/bails', 'Dead ball — replay the delivery', '5 penalty runs to the batting team'],
      ans: 1,
      ex: 'Rule 9.3.1: If the ball first hits the base and then stumps/bails, the batsman should be declared out if the batsman was outside the crease at the time the ball hits the stumps/bails.'
    },

    // ── MANKADING (Rule 10) ──────────────────────────────────

    {
      s: 'Mankading',
      q: 'A non-striker leaves the crease before the bowler reaches the highest point of his action. The bowler attempts a Mankad run out and succeeds. Does the delivery count as one in the over?',
      opts: ['No — Mankad dismissals do not count as a ball bowled', 'Yes — the ball shall count as one in the over', 'No — the delivery is replayed', 'Only if a warning was given first'],
      ans: 1,
      ex: 'Rule 10.1: If the non-striker is out of his/her ground from the moment the ball comes into play to the instant when the bowler would normally have been expected to release the ball, and the attempt is successful, then the ball shall count as one in the over.'
    },
    {
      s: 'Mankading',
      q: 'The non-striker is backing up early. The bowler wants to Mankad the non-striker. What must happen before the non-striker can be given out?',
      opts: ['The bowler can run out the non-striker immediately with no warning required', 'One warning must be given to the non-striker before the dismissal', 'Two warnings must be given before the dismissal', 'The umpire must notify the batting captain first'],
      ans: 1,
      ex: 'Rule 10.2: Before giving out, one warning needs to be given to the non-striker.'
    },
    {
      s: 'Mankading',
      q: 'A bowler attempts to Mankad the non-striker after the action has passed the highest point of the bowling action. What should the umpire do?',
      opts: ['Allow the run out — it is valid at any point before ball delivery', 'Give a warning to the team captain and call dead ball', 'Call a No Ball', 'Call a Wide ball'],
      ans: 1,
      ex: 'Rule 10.2.4: If a bowler tries to Mankad after reaching the highest point of the action, the umpire shall give a warning to the fielding team captain and call it a dead ball.'
    },
    {
      s: 'Mankading',
      q: 'A bowler has already been warned for attempting a Mankad after the highest point. The same bowler does it again in the same innings. What is the call?',
      opts: ['Another warning only', 'No ball', 'Dead ball', 'The bowler is banned from bowling for the rest of the innings'],
      ans: 1,
      ex: 'Rule 10.2.5: If this happens again after being warned (by the same or a different bowler), the umpire should call it a No Ball for each subsequent incident.'
    },
    {
      s: 'Mankading',
      q: 'A bowler fakes his bowling action to prevent his hand from reaching the highest point, then attempts a Mankad run out. Is the dismissal valid?',
      opts: ['Yes — the non-striker was still out of the crease', 'No — the bowler is not allowed to fake action to avoid the highest point, and the run out attempt is invalid', 'Yes — the umpire only judges whether the non-striker was out of the crease', 'Only valid if a warning was previously given'],
      ans: 1,
      ex: 'Rule 10.2.3: The bowler is not allowed to fake action to avoid letting his hand reach the highest point. If he does so, he will not be allowed to get the Mankad run out.'
    }

  ]
};
