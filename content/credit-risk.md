---
title: Credit Risk
description: How credit risk moves from the legal obligor and facility through default, loss parameters and portfolio dependence.
order: 20
collection: finance
verified: unverified
---

Indian banking lens: RBI credit-risk framework and Basel credit-risk concepts as adopted in India.

**Master mental model**

```text
Identify the obligor and credit objects
↓
Map facilities, accounts and exposure
↓
Underwrite repayment capacity and structure the credit
↓
Observe performance and deterioration
↓
Recognise and classify credit failure
↓
Manage restructuring, cure, re-default, write-off and recovery
↓
Measure PD, LGD and EAD
↓
Combine aligned parameters into exposure-level loss
↓
Observe credit quality through time
↓
Aggregate concentration, correlation and systematic risk
```

**Permanent rule. Credit risk is coherent only when the person, exposure, default state and loss parameters are defined on compatible bases before they are combined or aggregated.**

## 1. Obligor, borrower, counterparty and customer are not synonyms

Credit risk attaches to the person that owes performance. Commercial labels are not safe substitutes for legal identity.

| Term | Meaning | Credit-risk use |
| :--- | :--- | :--- |
| Obligor | Legal or natural person responsible for an obligation | Primary wholesale default and rating object |
| Borrower | Person receiving or using borrowed funds | Often the obligor in a loan, but not universally |
| Counterparty | Other contractual party to a transaction | Central for derivatives, securities financing and settlement exposures |
| Customer | Relationship or commercial label | Can contain several legal obligors |
| Facility | Specific contractual grant or commitment of credit | Owns limit, tenor, repayment terms, covenants and security |
| Account | Operational record for booking and servicing | Owns postings, balance, due dates and arrears |
| Exposure | Amount or value subject to credit loss for a stated purpose | Requires both a measurement basis and an aggregation level |

One corporate group can contain several obligors. One obligor can hold several facilities. One facility can use several accounts. A counterparty can create credit exposure without a conventional funded loan.

The first credit-risk task is therefore entity resolution: identify the person legally responsible for the obligation before ratings, defaults, limits or exposures are aggregated.

## 2. A product is not a facility, and a facility is not an account

The hierarchy moves from reusable design to contractual credit to operational records.

```text
Product
↓
Reusable lending design and standard terms
↓
Facility
↓
Specific sanctioned credit: limit, tenor, repayment schedule, covenants, security
↓
Account
↓
Operational booking: balance, postings, due dates, arrears, interest, fees
↓
Obligor view
↓
Aggregate the relevant facilities to the person that owes performance
```

A term loan can be one facility with one account. A revolving facility can produce several accounts or sub-accounts. One obligor can hold facilities with different collateral, seniority and utilisation behaviour.

A risk measure must name its level. An account-level DPD flag is not automatically an obligor-level default. A facility limit is not an account balance. A facility-specific LGD can differ across facilities to the same obligor because recovery structure differs.

## 3. Exposure is not the outstanding balance

### Never confuse [Outstanding balance] and [Exposure]

**Outstanding balance** is the amount currently booked as drawn or owed.

**Exposure** is the amount relevant to a stated credit-risk question. It can include current drawings, future drawings, contingent claims or aggregation above account level.

A sanctioned revolving line of INR 1 crore with INR 40 lakh currently drawn has a booked balance of INR 40 lakh. The credit exposure can be higher because some of the remaining INR 60 lakh may be drawn before default. A guarantee or letter of credit can create contingent exposure while the current loan balance is nil.

The permanent error is to place `outstanding_balance` into every exposure field. Current balance is one input. It is not a universal exposure definition.

## 4. Exposure changes meaning as aggregation rises

```text
Account exposure
↓
Facility exposure
↓
Obligor exposure
↓
Connected-group exposure
↓
Portfolio exposure
```

Each step answers a different question. Account exposure asks what is booked here. Facility exposure adds the relevant contractual position, including eligible undrawn or contingent amounts. Obligor exposure asks how much depends on one legal person. Connected-group exposure asks how much depends on one linked economic risk. Portfolio exposure adds the defined population.

Connectedness is tested through control or economic interdependence. Separate incorporation does not prove independent risk. Equally, grouping entities for concentration does not automatically force one common default status.

Splitting one economic group across subsidiaries can reduce apparent name concentration without changing the common failure mechanism. Every exposure number therefore needs two labels: **measurement basis** and **aggregation level**.

## 5. Primary repayment capacity comes before collateral

Underwriting begins with the primary source of repayment. The central question is whether the borrower can meet contractual payments from recurring cash flow or available resources under realistic conditions.

Base-case capacity is not enough. Revenue can fall. Input costs can rise. Interest rates can move. Working-capital needs can absorb cash. The downside case tests whether the facility remains serviceable when the assumptions that support repayment weaken.

Structure follows that assessment. Tenor, amortisation, covenants, limit size and pricing can reshape risk. They cannot manufacture cash generation that does not exist.

Collateral and guarantees sit behind the primary repayment source. They reduce loss if payment fails. They do not turn an uneconomic borrower into a performing credit. An asset-sale or liquidation product can legitimately rely on asset realisation as its designed repayment source. That is a different structure, not an exception to the rule.

## 6. A credit decision is borrower + purpose + amount + structure

A credit decision is a set of linked choices, not a verdict on whether a borrower is simply good or bad.

| Deciding condition | Question settled | Decision output |
| :--- | :--- | :--- |
| Policy eligibility | Is the activity, segment and risk permitted? | In policy, exception or prohibited |
| Purpose and amount | What is the money for and how much is justified? | Facility size and use |
| Repayment capacity | What recurring source services the debt? | Base-case affordability |
| Downside resilience | What happens under weaker revenue, higher cost or rate stress? | Stress weakness and headroom |
| Structure | Can tenor, amortisation, covenants or limit control the risk? | Terms and controls |
| Secondary recovery | What remains if primary repayment fails? | Collateral and guarantee support |
| Price | Does return compensate for the accepted risk and resources? | Risk-adjusted commercial terms |
| Authority | Who may accept the size, risk and exception profile? | Approve, condition, escalate or decline |

Credit policy determines what risk may be taken. Approval authority determines who may accept a particular case. Mixing those two creates exceptions without explicit ownership.

## 7. Collateral is a secondary way out

### Permanent rule

**A mitigant is worth only what can be legally enforced and economically realised when the borrower is under stress.**

Collateral value is therefore not the appraisal number printed at origination. Recognised value depends on the asset being identifiable, controlled where required, legally available, properly ranked and saleable. Volatility, prior claims, liquidation time and selling costs reduce what can actually be recovered.

```text
Adjusted collateral value = appraised value x (1 - haircut)

haircut   reduction for uncertainty, volatility, liquidation and other specified risks

Worked: INR 80 lakh x (1 - 25%) = INR 60 lakh
```

The calculation is a teaching relationship. Regulatory recognition can prescribe its own eligibility and haircut rules.

A borrower with weak repayment capacity and valuable collateral remains a weak performing-credit proposition. The collateral changes expected recovery after failure. It does not erase the failure risk.

## 8. A guarantee creates reliance on another obligor

A guarantee adds a contractual promise by another person to perform or pay if the primary obligor does not. Its value therefore depends on three things: enforceability, coverage and guarantor capacity.

A guarantee that is not legally effective provides no reliable recovery path. A guarantee that covers only part of the debt leaves the uncovered amount exposed. A strong document signed by a weak guarantor transfers risk to another weak person.

Guarantees can also create dependence. A corporate parent and subsidiary can deteriorate together. A personal guarantor whose wealth is concentrated in the borrower’s business may fail at the same time as the borrower. Face value therefore says little about economic protection without a view of the guarantor’s own credit quality and common risk drivers.

A guarantee does not remove credit risk. It changes the set of persons and cash flows on which recovery depends.

## 9. Default is a governed state, not a synonym for arrears or loss

Default must name its governing framework before PD, default rates, cure rates or LGD can be measured.

| Definition component | What must be fixed |
| :--- | :--- |
| Unit | Obligor, facility, account or defined retail pool |
| Event | Qualitative and quantitative triggers |
| Materiality | Which overdue obligations count |
| Propagation | Whether one facility’s event affects others |
| Entry date | Date on which the governed trigger is first met |
| Exit | Conditions for return to non-default |
| History | States and dates retained after cure or write-off |

Under the RBI (Commercial Banks – Resolution of Stressed Assets) Directions, 2025, **default** means non-payment when whole or any part or instalment of debt has become due and payable and remains unpaid. For revolving facilities such as cash credit, the definition also captures an outstanding balance that remains continuously above the sanctioned limit or drawing power, whichever is lower, for more than 30 days.

RBI **NPA** classification is separate. Under the current asset-classification Directions, a term loan becomes NPA when interest or principal remains overdue for more than 90 days. The word `default` must therefore never be used as an unlabelled synonym for NPA.

The Basel wholesale reference definition is different again: unlikeliness to pay in full without recourse to actions such as realising security, **or** more than 90 days past due on a material credit obligation.

### Never confuse [Default] and [Loss]

Default is entry into a defined credit state. Loss is the economic shortfall after recoveries, costs and timing. A default can still produce substantial recovery.

## 10. Arrears measure money; DPD measures time

```text
DPD = observation date - relevant unpaid contractual due date

DPD                days past due under the specified counting convention
observation date   date at which delinquency is measured
contractual due date   due date of the relevant unpaid obligation

Worked: instalment due 1 July and still unpaid at end of 31 July = 30 DPD under a simple elapsed-day convention.
```

Arrears answer **how much** required payment is unpaid. DPD answers **how long** the relevant payment has remained unpaid. A delinquency bucket groups that clock into an operational state.

The counting convention matters. Due-date logic, payment allocation and day-end processing can move an account between buckets without any change in the borrower’s economics. India’s prudential framework determines overdue and SMA/NPA status through the relevant day-end process.

Revolving facilities need product-specific logic. Overdraft and cash-credit accounts use the prescribed “out of order” test rather than a simple instalment schedule. The detailed test belongs to the Indian lending regime; the credit-risk point is that one DPD algorithm does not fit every facility.

## 11. Unlikeliness to pay can produce default at zero DPD

### Mental model

**DPD asks how long payment has been late. UTP asks whether full payment remains credible.**

India’s current NPA rules do not use the Basel UTP test as the NPA definition. The RBI stressed-assets framework nevertheless requires banks to identify financial difficulty before arrears become severe. Indicators include probable future default without a concession, cash flows insufficient to service contractual debt and existing exposures already showing repayment difficulty. Financial difficulty can exist without arrears.

The Basel UTP limb turns that economic judgement into a default trigger. A borrower can therefore be current on scheduled payments and still meet a Basel-style default definition because full payment is no longer likely without extraordinary recovery action.

A watch-list flag or downgrade is not automatically UTP. It is evidence to assess under governed criteria. Strong collateral does not negate UTP. Collateral belongs to recovery severity. UTP belongs to the default event. Treating a fully secured exposure as non-defaulted solely because security should cover the debt collapses LGD into PD.

## 12. The default trigger is UTP OR the applicable backstop

India uses separate clocks for stressed-asset default and prudential NPA classification. The Basel reference definition uses the UTP-or-backstop logic in the section title.

```text
India: debt due and unpaid
↓
RBI stressed-assets default
↓
SMA ageing for applicable loans
↓
Term-loan NPA if overdue for more than 90 days

Basel reference:
Qualifying UTP ───────────────→ Default on UTP date
        OR
Material past due > 90 days ─→ Default on backstop date
```

The Basel past-due backstop is an outer mechanical trigger. It is not permission to wait when earlier qualitative evidence already establishes default. A Basel-style default observed through UTP at 20 DPD is not re-dated to day 91 merely because the mechanical trigger later occurs.

The Indian term-loan 90-day NPA rule and the Basel wholesale 90-day backstop can coincide in time. They do not become the same definition. RBI stressed-assets default can arise earlier from non-payment, while Basel default can arise earlier from UTP.

### Permanent trap

**Default = 90 DPD.** This shorthand erases the governing framework, suppresses early UTP defaults and confuses Indian default, SMA/NPA classification and Basel default.

## 13. Indian credit states must remain distinct from the default definition

India’s prudential credit states make the deterioration clock visible. They sit alongside, not inside, the RBI stressed-assets definition of default.

| Indian state | Core credit meaning | Time anchor for a continuously overdue term-loan style exposure |
| :--- | :--- | ---: |
| Standard | Performing under prudential asset classification | No NPA condition met |
| SMA-0 | Early overdue / incipient stress | Up to 30 days overdue |
| SMA-1 | More advanced overdue | More than 30 days and up to 60 days |
| SMA-2 | Severe pre-NPA overdue | More than 60 days and up to 90 days |
| NPA | Prudential non-performing asset | Interest or principal overdue for more than 90 days for a term loan |
| Sub-standard | First NPA classification category | NPA for a period less than or equal to 12 months |
| Doubtful | NPA beyond the sub-standard period | Remained in the sub-standard category for 12 months |
| Loss | Identified as uncollectible or of such little bankable value that continued recognition is not warranted | No DPD threshold |

SMA classification applies to loans including retail loans, other than agricultural advances governed by crop-season-based rules. OD/CC, bills, agricultural advances, derivatives and other specified products use their own NPA tests. Asset classification is borrower-wise under the current commercial-bank Directions, subject to stated exceptions.

As at 1 September 2026, the RBI (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025 remain in force for covered commercial banks. The RBI (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026 take effect on 1 April 2027.

## 14. A restructuring can reveal distress rather than remove it

```text
Existing terms
↓
Terms change
↓
Why did they change?
├─ Ordinary commercial reason → revised contract; distress not implied
└─ Borrower financial difficulty
   ↓
   Concession granted?
   ├─ No → continue credit assessment
   └─ Yes → distressed restructuring / forbearance analysis
      ↓
      Test UTP or default consequence
      ↓
      Preserve old schedule, concession and original credit history
```

Extending maturity can reduce the immediate instalment. Capitalising arrears can reset operational DPD. Principal forgiveness can reduce the contractual claim. None of these actions proves that repayment capacity has recovered.

The economic question is why the terms changed and what the change reveals about the borrower’s ability to perform under the original obligation. A new account number or repayment schedule does not create a new credit history.

Repeated restructurings are especially informative. They can produce a sequence of technically current contracts while the underlying borrower remains unable to generate sufficient cash.

## 15. Cure is a state transition, not a clean payment snapshot

```text
Default or NPA state
↓
Original trigger ceases
↓
Required arrears and viability conditions satisfied
↓
Required observation or satisfactory-performance period completed, where applicable
↓
Return to non-default / standard
↓
New qualifying trigger?
├─ No → Remain current
└─ Yes → Re-default / fresh stress cycle
```

For India’s current commercial-bank prudential classification, an NPA can be upgraded to standard only after the **entire arrears of interest and principal are paid**. Where a borrower has more than one credit facility with the bank, the arrears across all facilities must be cleared before upgrade.

Restructured accounts face a stronger test. A standard account is immediately downgraded to NPA, sub-standard to begin with, following restructuring. Upgrade requires satisfactory performance across all outstanding loan and credit facilities with the specified lenders during the monitoring period. It cannot occur before **one year** from commencement of the first payment of interest or principal, whichever is later, on the facility with the longest moratorium under the resolution plan.

For comparison, the current EU definition-of-default guidance uses a minimum **three-month** observation period for ordinary return to non-default and at least **one year** for defaults associated with distressed restructuring. These are not RBI NPA cure periods.

## 16. Cure never deletes default history

### Permanent rule

**Cure removes the current default state. It does not remove the historical fact that default occurred.**

A usable credit history keeps the first default date, trigger, restructuring events, cure date, probation period where applicable, re-default and recovery outcomes. Deleting the old default after an account becomes current produces a false population of borrowers who appear never to have failed.

That error affects several measures at once. PD calibration loses prior defaults. Transition analysis overstates movement from weak to healthy states. Restructuring performance appears stronger because failed cures disappear. LGD loses its connection to the original default event.

Re-default must therefore be a new event linked to the earlier lifecycle, not a replacement for it.

## 17. Write-off is not debt forgiveness

Write-off changes the carrying amount or prudential treatment of an exposure. It does not necessarily release the borrower from the legal obligation.

A bank can write off or technically write off an amount while continuing collection, enforcement or settlement activity. Recoveries received later remain part of the economics of the original default. Removing those recoveries from the history biases loss severity upward.

Debt forgiveness is different. It releases some or all of the debtor’s legal obligation. A written-off amount can remain legally recoverable; a forgiven amount cannot be treated as though the same claim still exists.

The database therefore needs separate states for default, allowance or provision, write-off, legal claim and recovery activity. A zero carrying amount does not imply zero credit history or zero future cash flow.

The current Indian prudential regime recognises write-offs, technical write-offs and subsequent recoveries. The source pack also states that a partial or technical write-off does not make the remaining exposure standard merely because part of the balance has left the carrying amount.

## 18. Economic loss includes recovery amount, cost and time

```text
Economic loss = EAD - PV(net post-default recoveries)

EAD                    exposure at default
PV                     present value measured at the default date
net post-default recoveries   borrower payments + collateral proceeds + guarantee proceeds - workout costs

Worked:
EAD at default                         INR 80 lakh
PV of borrower and collateral recoveries   INR 52 lakh
PV of workout costs                    INR 4 lakh
PV of net recoveries                   INR 48 lakh
Economic loss                          INR 32 lakh
```

Recovery amount alone is incomplete. Legal fees, collection expense, asset maintenance and disposal costs reduce recovery. Delay also matters because a recovery received years after default is worth less at the default date than the same nominal amount received immediately.

Write-off is an accounting or prudential event inside the loss lifecycle. Economic loss is an outcome of the complete default-to-recovery cash-flow history.

## 19. The default lifecycle has one clock and one event ledger

The Indian lifecycle leads. International rows appear only where a different definition would otherwise create a false equivalence.

| Framework / event | Trigger or figure | State consequence | Retain |
| :--- | :--- | :--- | :--- |
| Contractual due date | Contract date | Payment becomes due | Original schedule |
| India: overdue | Any amount due and unpaid on its due date | Overdue status begins | First unpaid due date |
| India: stressed-assets default | Whole or any part / instalment of debt due and unpaid | Default under the Resolution of Stressed Assets Directions | Default date and amount |
| India: revolving-facility default | Balance continuously above sanctioned limit / drawing power for more than 30 days | Default under the stressed-assets framework | Limit, drawing power, start date |
| India: SMA-0 | Up to 30 days overdue | Early stress | Entry date |
| India: SMA-1 | More than 30 and up to 60 days overdue | Higher stress | Entry date |
| India: SMA-2 | More than 60 and up to 90 days overdue | Severe pre-NPA stress | Entry date |
| India: term-loan NPA | Interest or principal overdue for more than 90 days | NPA | NPA date |
| India: OD/CC NPA | Account meets an “out of order” condition for 90 days | NPA | Condition and NPA date |
| India: bills NPA | Bill overdue for more than 90 days | NPA | Due date and NPA date |
| India: agricultural NPA | Two crop seasons for short-duration crops; one crop season for long-duration crops | NPA | Crop season and NPA date |
| India: past-due materiality | No separate de minimis threshold in the overdue / term-loan NPA rule; any unpaid amount due is overdue | Ageing applies to the unpaid obligation | Amount and due date |
| India: sub-standard | NPA for less than or equal to 12 months | Sub-standard | Entry date |
| India: doubtful | Remained sub-standard for 12 months | Doubtful | Entry date |
| India: loss | Loss identified; asset considered uncollectible / of little bankable value | Loss asset | Identification date |
| India: restructuring | Concession for borrower financial difficulty; a standard account is downgraded to NPA, sub-standard to begin with | Restructured NPA | Old and new terms |
| India: settlement treated as restructuring | Compromise-settlement payment period exceeds 3 months | Restructuring rules apply | Settlement terms and dates |
| India: restructured upgrade | Satisfactory performance during monitoring period; not before 1 year from first interest/principal payment, whichever is later, on the longest-moratorium facility | Eligible for upgrade subject to other conditions | Monitoring dates and performance |
| India: ordinary NPA upgrade | Entire arrears of interest and principal cleared across all facilities with the bank | Return to standard, subject to applicable rules | Payment and upgrade date |
| Basel reference: UTP | Qualifying evidence; no DPD minimum | Basel-style default can begin | Evidence and default date |
| Basel reference: past-due backstop | More than 90 DPD on a material credit obligation | Basel-style default | Trigger date |
| EU contrast: materiality | EUR 100 retail / EUR 500 non-retail absolute component and 1% relative component; both must be exceeded | Material past-due test | Amount and denominator |
| EU contrast: ordinary default exit | No default trigger for at least 3 months, plus required assessment | Possible return to non-default | Observation dates |
| EU contrast: distressed-restructuring exit | Minimum 1-year observation period plus required performance tests | Possible return to non-default | Restructuring and observation dates |
| Cure | Full exit criteria met under the governing framework | Current default / NPA state ends | Entry and cure dates |
| Re-default | New qualifying trigger | New default event | Link to prior lifecycle |
| Write-off | Applicable accounting / prudential rule | Carrying amount changes | Amount and date |
| Post-write-off recovery | Later cash or value | Recovery increases | Source, amount and date |
| Final economic loss | Workout sufficiently resolved | Loss outcome stabilises | EAD, recoveries, costs, timing |

The **event ledger owns sequence and retained dates**. The **trigger column owns the numbers and conditions that move an exposure between states**. RBI default, RBI NPA and Basel default can occupy the same time axis without becoming one definition.

## 20. A PD without unit, event, horizon and observation date is incomplete

```text
PD_h = P(default during horizon h | information available at observation date)

PD_h               probability of the defined default event during horizon h
h                  stated forecast horizon
unit               obligor, facility or homogeneous pool that can default
default event      governed event being predicted
observation date   date that fixes the information set
```

A PD is not a declaration that a named borrower will default. It is a probability assigned before the outcome is known. The same numeric PD can describe different risks if the horizon, population or default definition differs.

A score is not automatically a PD. A ranking output becomes a probability only after a defined calibration maps the score or grade to the specified event over the specified horizon.

A one-year PD cannot be substituted mechanically for a lifetime probability. Extending the horizon generally increases the cumulative probability of at least one default event, even when the annual risk profile is unchanged.

## 21. Point-in-time is not short-term; through-the-cycle is not long-term

### Never confuse [PIT/TTC] and [forecast horizon]

**Point-in-time** describes strong sensitivity to current borrower and macroeconomic conditions.

**Through-the-cycle** describes a rating philosophy that dampens temporary cyclical movements and emphasises persistent credit characteristics.

**Forecast horizon** describes the time interval over which default probability is measured.

These are different axes. A one-year PD can be PIT, TTC-like or between the two. A lifetime forecast can use changing point-in-time macroeconomic conditions. A stable rating grade can coexist with a changing PD if the grade-to-PD calibration moves while the assigned grade does not.

A long-run average default rate is not automatically a TTC rating system. Averaging outcomes smooths data. TTC concerns how the risk assessment itself responds to the cycle.

## 22. LGD starts at default, not at collateral appraisal

```text
LGD = (EAD - PV(net recoveries)) / EAD

LGD             loss given default, as a fraction of EAD
EAD             exposure at default
PV              present value at the default date
net recoveries  borrower payments + collateral proceeds + guarantee proceeds - workout costs

Worked: (INR 80 lakh - INR 48 lakh) / INR 80 lakh = 40%
```

LGD is severity **conditional on default**. Collateral affects LGD only through recovery that can legally and economically be realised. An appraisal at origination is therefore an input to recovery expectations, not LGD itself.

Seniority, prior claims, guarantee performance, legal cost, sale discounts and recovery delay all change net recovery. Downturn conditions can worsen several drivers at once: collateral values can fall while defaults rise and recovery timelines lengthen.

Under aligned definitions, recovery rate equals PV of net recoveries divided by EAD, and LGD equals one minus that recovery rate. The relationship fails when the exposure base, costs or discounting conventions differ.

## 23. EAD is the exposure at failure, not utilisation today

```text
CCF = additional pre-default drawing / undrawn amount at reference date

EAD = current drawn amount + CCF x undrawn amount

CCF                  credit conversion factor under the stated method
current drawn amount amount already utilised
undrawn amount       available commitment at the reference date
EAD                   exposure at default

Worked:
Current drawn amount   INR 40 lakh
Undrawn amount         INR 60 lakh
CCF                    50%
EAD                    INR 70 lakh
```

The decomposition is a teaching relationship. Applicable prudential frameworks prescribe treatment by exposure type and approach.

For an amortising term loan, EAD can be close to the expected balance at default. For cards, overdrafts and revolving commitments, distressed borrowers can draw further before failure. Contingent items can also crystallise into claims.

Current utilisation therefore answers a different question from EAD. The reference-date limit and undrawn amount must remain available in data because drawdown behaviour is measured from the position before default, not reconstructed from the final balance alone.

## 24. PD, LGD and EAD answer three different questions

The parameter block separates probability, severity and amount before any multiplication occurs.

| Measure | What it measures | Plain-text relationship | Unit | Routine confusion |
| :--- | :--- | :--- | :--- | :--- |
| PD | Chance of the defined default event over a stated horizon | Probability of default | % or probability | Credit score; grade; lifetime risk without horizon label |
| LGD | Loss severity conditional on default | (EAD - PV net recoveries) / EAD | % of EAD | Collateral haircut; write-off rate |
| EAD | Amount exposed when default occurs | Drawn + converted undrawn / contingent amount | INR or other currency | Current balance; sanctioned limit |
| EL | Probability-weighted average loss | PD x LGD x EAD | INR or other currency | Provision; most likely loss; capital |
| UL | Adverse variation above expected loss | High loss quantile - expected loss, conceptually | INR or other currency | Regulatory capital formula |

PD, LGD and EAD are the core loss parameters. EL and UL are derived loss measures. Their labels do not make them interchangeable with accounting allowances or regulatory capital.

### Permanent trap

A field called `risk` that alternately means score, PD, EL, provision and capital destroys the measurement chain even when every underlying number is individually correct.

## 25. PD x LGD x EAD works only after the definitions align

```text
Expected Loss = PD x LGD x EAD

PD   probability of the defined default event over the chosen horizon
LGD  loss severity conditional on that same default event
EAD  exposure at that same default event

Worked: 2.5% x 45% x INR 80 lakh = INR 90,000
```

The multiplication is easy. Alignment is the mechanism.

| Alignment test | Required consistency |
| :--- | :--- |
| Default event | PD predicts the event that anchors LGD and EAD |
| Unit | Obligor, facility or pool treatment is compatible |
| Horizon | PD horizon matches the intended loss measurement |
| Observation point | Inputs use information available at the intended prediction date |
| Population | Parameter estimates describe comparable exposures |
| Exposure basis | LGD denominator and EAD refer to the same default-date amount |
| Conditions | Economic conditioning across parameters is coherent |
| Recovery basis | LGD includes the intended recoveries, costs and timing |

### Key insight

A regulatory one-year PD, a lifetime accounting LGD and today’s balance can produce a precise number with no coherent loss experiment behind it.

## 26. One facility can carry several different exposure numbers

One revolving working-capital facility can move through the entire credit-loss chain without any single number replacing the others.

```text
Sanctioned limit: INR 1.00 crore
↓
Current utilisation: INR 40 lakh
↓
Undrawn commitment: INR 60 lakh
↓
Assumed CCF: 50%
↓
EAD: INR 70 lakh
↓
Default occurs
↓
PV of net recoveries: INR 42 lakh
↓
Economic loss: INR 28 lakh
↓
LGD: 40%
↓
One-year PD at observation date: 3%
↓
Expected loss: 3% x 40% x INR 70 lakh = INR 84,000
```

The sanctioned limit describes contractual availability. Current utilisation describes the drawn position now. EAD describes the amount at failure. Economic loss describes the shortfall after complete recovery economics. LGD scales that shortfall to EAD. PD supplies the probability before default. EL combines aligned probability, severity and exposure.

The chain fails if any one number is allowed to masquerade as all the others.

## 27. Retail and wholesale credit use different units of analysis

| Dimension | Retail tendency | Wholesale tendency |
| :--- | :--- | :--- |
| Population | Large | Smaller |
| Individual exposure | Comparatively small | Often material |
| Homogeneity | Higher within designed segments | Lower |
| Primary analysis unit | Pool, segment or facility behaviour | Obligor rating plus facility analysis |
| Evidence | Repeated behavioural observations | Financials, sector, management, structure and judgement |
| Default application | Facility or pool treatment can apply under the governing framework | Obligor-centred treatment is the usual wholesale reference point; Basel formalises this in its wholesale framework |

The distinction is economic, not technological. Retail does not mean automated. Wholesale does not mean judgement-only. Quantitative models can be central to both.

Large populations of similar exposures create repeated evidence that supports pooled estimation. Wholesale populations contain fewer truly comparable obligors and each exposure can matter more, so borrower-specific structure and information carry greater weight.

The governing framework still determines which exposures qualify for retail or wholesale treatment. The conceptual point is that the unit of analysis must match homogeneity, data density and materiality.

## 28. Prediction cannot use information from after the observation date

Application information exists at or before origination. Behavioural information is generated after the relationship begins. Credit-information bureau data provide external reported indebtedness and repayment history available at a particular snapshot date.

The observation date fixes what the prediction is allowed to know. An origination model cannot use later arrears. A behavioural score at March cannot use a bureau update received in June. A default label can be observed later, but the predictors for the earlier decision cannot travel back in time.

This is the difference between prediction and reconstruction. Leakage makes a model appear highly predictive because it has been given evidence of the outcome that was unavailable when the real decision had to be made.

A thin clean bureau file is also not the same as strong repayment capacity. Absence of adverse history can reflect absence of observed history. Bureau behaviour is evidence about past credit performance. Repayment capacity concerns future ability to service the obligation.

## 29. A score is not a grade, and a grade is not a PD

| Object | What it is | Time / scale meaning | What it is not |
| :--- | :--- | :--- | :--- |
| Score | Continuous or ordered predictive output | Ranks exposures by estimated risk | Automatically a probability |
| PD | Calibrated probability of a defined default event | Requires event, horizon and observation date | A raw score |
| Rating grade | Discrete credit-quality class | Position on an ordered risk scale | Meaningful merely because it is called “4” or “BBB-like” |
| Master scale | Ordered definition of all grades | Makes grade meaning comparable | A transition matrix |
| Override | Governed expert departure from model or initial grade | Must retain reason and result | Unrecorded discretion |
| Migration | Movement from one grade to another over time | Preserves direction of deterioration or improvement | PD recalibration |

A grade retains meaning only if its assignment criteria and default boundary remain stable enough for history to remain comparable. Changing grade definitions and then combining old and new labels creates false migration.

PD recalibration can change the probability mapped to an unchanged grade. Rating migration and PD movement are therefore related but distinct events.

## 30. Migration, vintages and roll rates answer different time questions

| Method | Organises by | Time question | What it reveals |
| :--- | :--- | :--- | :--- |
| Rating migration | Starting and ending grade | Where did obligor credit quality move? | Upgrades, downgrades and default transitions |
| Vintage analysis | Origination cohort | How did like-aged cohorts perform? | Underwriting, channel or cohort changes |
| Roll-rate analysis | Starting delinquency or credit state | Where did accounts move next? | Cure, stability and worsening speed |
| Snapshot | Observation date | What is in each state now? | Current composition only |

Vintage analysis compares cohorts at equal months-on-book. A six-month-old portfolio has had less time to default than a three-year-old portfolio. Calendar-date comparisons therefore confound credit quality with seasoning.

A roll rate fixes a start state, end state and interval.

```text
Roll rate(i → j) = exposure moving from state i to state j / starting exposure in state i
```

The numerator and denominator must use the same population basis. Identical current 60+ DPD stocks can conceal opposite directions if one portfolio is curing and the other is rolling towards default.

## 31. Borrower count is not diversification

| Concentration form | Common loss driver | Typical view |
| :--- | :--- | :--- |
| Single name | One obligor | Obligor exposure share |
| Connected group | Control or economic dependency | Aggregated group exposure |
| Sector | Industry conditions | Sector share and stressed loss |
| Geography | Local economy, law or property market | Regional exposure share |
| Product / collateral | Common underwriting or recovery mechanism | Product or collateral share |
| Hidden factor | Commodity, customer, currency or funding dependency | Scenario or factor mapping |

A portfolio with one thousand borrowers can remain concentrated if most depend on the same property market, commodity price or anchor customer. Diversification comes from genuinely different loss drivers, not row count.

Indian large-exposure rules constrain single-counterparty and connected-counterparty risk. Internal concentration management must remain broader because sector, geography and common-factor risk can be material without a single legal exposure breaching a large-exposure limit.

**Diversification is judged by independence of loss drivers, not by nominal borrower count.**

## 32. Common shocks make defaults and recoveries move together

```text
Common macro / sector shock
↓
Many obligors deteriorate together
↓
Defaults cluster
↓
Collateral values and guarantor capacity can weaken at the same time
↓
LGD rises while default frequency rises
↓
Revolving borrowers can draw more before failure
↓
EAD can rise with stress
↓
Portfolio loss tail becomes heavier
```

Correlation is dependence between credit outcomes. Concentration is the amount of exposure placed on names or common drivers. The two interact but are not the same.

Idiosyncratic shocks such as one plant failure can be diversified across independent names. Systematic shocks such as recession, rate stress or a sector collapse affect many borrowers together and do not disappear merely because the portfolio contains more accounts.

Positive dependence can also run across parameters. Defaults can rise while recoveries fall. Revolver utilisation can rise before default. Treating PD, LGD and EAD as independent averages can therefore understate severe portfolio outcomes.

## 33. Expected loss is not unexpected loss

### Never confuse [Expected loss] and [unexpected loss]

**Expected loss** is the probability-weighted average credit loss under a defined measurement. At exposure level it can be decomposed as aligned PD x LGD x EAD.

**Unexpected loss** is adverse variation around that average. Conceptually, it is the severe part of the portfolio loss distribution above expected loss. Concentration, correlation and systematic stress determine how wide that distribution becomes.

Two portfolios can have the same expected loss and very different adverse tails. Thousands of independent small exposures can diversify idiosyncratic outcomes. A few connected or highly correlated exposures can produce the same average loss with much larger severe-loss scenarios.

Capital addresses solvency protection against adverse loss under a regulatory or internal framework. The calculation of regulatory capital, risk-weighted assets, floors, buffers and ratios is a separate subject. The credit-risk distinction that must remain is simpler: **average loss cost and protection against severe loss answer different questions.**

## What to retain

- Credit risk starts with the legal person that owes performance, not the customer label.
- Product, facility, account, exposure and obligor are different levels and must remain different in data and analysis.
- Primary repayment capacity is underwritten before collateral and guarantees are credited as secondary recovery.
- DPD is a payment clock. Default is a governed state. UTP can create default before 90 DPD.
- RBI SMA and NPA states make the Indian deterioration lifecycle visible but are not synonyms for the Basel default definition.
- Cure ends the current default state; it never deletes the original default event.
- Write-off changes carrying treatment; economic loss requires complete recoveries, costs and timing.
- PD measures likelihood, LGD measures severity conditional on default, and EAD measures the amount exposed at default.
- PD, LGD and EAD can be multiplied only after event, unit, horizon, population and valuation bases align.
- Diversification depends on independent loss drivers. Concentration and correlation create clustered portfolio loss.
- Expected loss is the average loss measure. Unexpected loss concerns adverse variation around that average.

## Sources

- *Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025*, Reserve Bank of India, RBI/DOR/2025-26/164, DOR.STR.REC.83/21.04.048/2025-26, 28 November 2025, updated 1 July 2026.
- *Reserve Bank of India (Commercial Banks – Resolution of Stressed Assets) Directions, 2025*, Reserve Bank of India, RBI/DOR/2025-26/165, DOR.STR.REC.84/21.04.048/2025-26, 28 November 2025, updated 1 July 2026.
- *Master Direction – Reserve Bank of India (Credit Information Reporting) Directions, 2025*, Reserve Bank of India, RBI/DoR/2024-25/125, DoR.FIN.REC.No.55/20.16.056/2024-25, 6 January 2025.
- *Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026*, Reserve Bank of India, DOR.STR.REC.No.6/21.06.011/2026-27, 27 April 2026, effective 1 April 2027.
- *Large Exposures Framework*, Reserve Bank of India, DBR.No.BP.BC.43/21.01.003/2018-19, 3 June 2019, as amended.
- *Principles for the Management of Credit Risk*, Basel Committee on Banking Supervision, BCBS d75, September 2000.
- *Basel Framework — IRB approach: risk components*, Basel Committee on Banking Supervision, CRE32.
- *Basel Framework — Definitions and application*, Basel Committee on Banking Supervision, LEX10.
- *Basel Framework — Credit risk*, Basel Committee on Banking Supervision, SRP32.
- *Guidelines on the application of the definition of default under Article 178 of Regulation (EU) No 575/2013*, European Banking Authority, EBA/GL/2016/07, 28 September 2016.
- *Regulation (EU) 2018/1845 on the threshold for assessing the materiality of credit obligations past due*, European Central Bank, ECB/2018/26, 21 November 2018.
- *Stability of a “through-the-cycle” rating system during a financial crisis*, Financial Stability Institute, Bank for International Settlements, 8 September 2006.
- *Report to the Congress on Credit Scoring and Its Effects on the Availability and Affordability of Credit*, Board of Governors of the Federal Reserve System, August 2007.
- *Estimation Methodologies for Losses, Revenues, and Expenses*, Board of Governors of the Federal Reserve System, August 2013.

## Verification log

2026-09-01 — Sections 9, 13, 15 and 19: Indian default, SMA bands, NPA triggers, sub-standard/doubtful/loss categories, NPA upgrade and restructuring-upgrade periods were sourced during drafting from the RBI (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025 and RBI (Commercial Banks – Resolution of Stressed Assets) Directions, 2025, both updated 1 July 2026. Independent verification is outstanding.

2026-09-01 — Section 19: The Indian overdue and term-loan NPA position, including the absence of a separate de minimis materiality threshold, was sourced during drafting from the RBI (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025. The EU materiality contrast and three-month / one-year return-to-non-default periods were sourced during drafting from Regulation (EU) 2018/1845 and EBA/GL/2016/07. Independent verification is outstanding.
