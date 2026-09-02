---
title: Expected Credit Loss
description: How the RBI ECL regime stages credit risk, measures and floors expected loss, recognises income, transitions capital and operates inside a bank.
order: 40
collection: finance
verified: unverified
---

*Indian commercial-bank lens, as at 2 September 2026: the Reserve Bank of India’s final Asset Classification, Provisioning and Income Recognition Directions, 2026 commence on 1 April 2027; the 2025 IRACP Directions remain operative until then, while applicable NBFCs and HFCs remain under Ind AS 109.*

```text
Set the entity, regime and financial instrument inside the applicable ECL perimeter
→
Assess deterioration and assign Stage 1, Stage 2 or Stage 3
→
Select the 12-month or lifetime loss horizon
→
Define the probability-weighted discounted cash-shortfall target
→
Build the data history and stable homogeneous risk pools
→
Estimate PD, LGD and EAD; add macro scenarios, lifetime paths and EIR discounting
→
Apply stage-specific income recognition and POCI treatment
→
Add justified overlays, apply regulatory parameter backstops and prudential floors, and determine the final allowance
→
Bridge 31 March 2027 IRACP into the 1 April 2027 ECL opening and its CET1 transition
→
Run ECL across loans, investments and off-balance-sheet exposures through the controlled close
→
Reconcile, attribute and explain allowance movements, volatility and sensitivities
→
Govern, independently validate, implement, feed downstream processes and disclose the result
```

**Permanent rule: RBI ECL is a staged expected-loss regime constrained by RBI prudential minima and its own capital transition; Ind AS 109 is a comparison baseline, not a transferable substitute.**

## 1. The final RBI ECL regime exists now but commences on 1 April 2027

The Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026 were issued on 27 April 2026. The instrument is final. It comes into force on 1 April 2027.

That date matters twice. Before 1 April 2027, covered commercial banks remain governed by the Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025. From 1 April 2027, the 2026 Directions replace that provisioning architecture with ECL while retaining NPA classification.

The regime therefore exists as a final rule on 2 September 2026 but is not yet operative. A bank building models, data and controls is implementing a final requirement. A bank reporting its books before 1 April 2027 is still applying IRACP.

```text
2 September 2026
Final ECL Directions issued; implementation under way
→
31 March 2027
Last day before commencement; closing IRACP position
→
1 April 2027
RBI ECL regime commences
```

The final instrument carries the confirmed identifiers RBI/DOR/2026-27/398 and DOR.STR.REC.No.6/21.06.011/2026-27.

## 2. The RBI bank perimeter and the Ind AS perimeter are different

The 2026 Directions define their own population. They apply to banking companies other than Small Finance Banks, Payments Banks and Local Area Banks, corresponding new banks, and the State Bank of India. Regional Rural Banks and co-operative banks are not inside that defined commercial-bank perimeter.

India therefore has parallel expected-loss regimes.

| Entity population | Position as at 2 September 2026 | From 1 April 2027 |
|---|---|---|
| Banks inside the 2026 Directions | IRACP remains operative | RBI staged ECL |
| Small Finance Banks | Outside the defined 2026 Directions perimeter | Separate applicable RBI framework |
| Payments Banks | Outside | Separate applicable RBI framework |
| Local Area Banks | Outside | Separate applicable RBI framework |
| Regional Rural Banks | Outside | Separate applicable RBI framework |
| Co-operative banks | Outside | Separate applicable RBI framework |
| Applicable NBFCs and HFCs | Ind AS 109 ECL subject to RBI prudential requirements | Continues under applicable Ind AS and RBI requirements |

The dividing line is entity type, not familiarity with IFRS 9. RBI ECL for banks is not bank adoption of Ind AS 109.

## 3. Only specified credit exposures enter the RBI ECL model

The ECL chapter applies to contractual credit exposures. The measurement basis of the instrument comes before the loss calculation.

| Instrument | RBI ECL treatment |
|---|---|
| Loans | In scope |
| Debt securities other than those measured at FVTPL | In scope |
| Trade receivables | In scope; lifetime ECL applies |
| Lease receivables | In scope; lifetime ECL applies |
| Loan commitments, including undrawn commitments | In scope |
| Off-balance-sheet credit exposures | In scope |
| Other financial assets with a contractual right to receive cash | In scope unless specifically excluded |
| Investments in subsidiaries, associates and joint ventures | Outside ECL-based provisioning |
| Ordinary FVTPL debt instruments | Outside the ECL loss-allowance mechanism; separate prudential treatment can apply if non-performing |

A commitment enters the ECL framework when the bank becomes party to the irrevocable commitment or obligation. The absence of a funded balance does not remove credit risk.

For trade and lease receivables, lifetime ECL applies without the ordinary Stage 1 versus Stage 2 horizon switch. The simplified measurement treatment does not mean that the exposure is risk-free or that forward-looking information disappears.

## 4. RBI ECL is not Ind AS 109

Both regimes use expected credit loss, three-stage language and forward-looking information. The transfer stops there. RBI adds prudential constraints and retains regulatory classifications that do not exist as part of Ind AS 109 measurement.

| Dimension | Ind AS 109 general ECL model | RBI bank ECL from 1 April 2027 |
|---|---|---|
| Legal character | Accounting standard | RBI prudential and recognition regime |
| Ordinary performing exposure | Stage 1, 12-month ECL | Stage 1, 12-month ECL |
| SICR | Relative deterioration since initial recognition | Relative deterioration, with RBI-specific operational requirements and backstops |
| Credit-impaired exposure | Stage 3, lifetime ECL | Stage 3, lifetime ECL |
| Default/NPA | Accounting credit impairment is not itself an RBI NPA classification | Default for these Directions is tied to NPA status; NPA rules remain |
| Product-wise Stage 1 and Stage 2 provisioning floors | No such accounting-standard floor | Mandatory prudential floors |
| Regulatory minimum PD | No Ind AS 109 minimum | RBI minimum applies |
| Regulatory fallback LGD | No Ind AS 109 fallback table | RBI backstops apply when reliable internal LGD is unavailable |
| Stage 3 interest | EIR applied to amortised cost for assets that became credit-impaired after origination | Interest is not accrued; income is recognised on cash basis |
| POCI initial loss | Embedded in credit-adjusted EIR | Initial expected loss embedded in credit-adjusted EIR mechanics |
| POCI interest income | Credit-adjusted EIR mechanics under Ind AS 109 | Cash-basis income recognition under the RBI Directions |
| Prudential capital transition | Not part of Ind AS 109 | Optional CET1 transition to 31 March 2031 |
| NPA classification | Not an Ind AS staging category | Retained beside staging |

### Never confuse [Ind AS 109 ECL] and [RBI ECL]

**Ind AS 109 ECL** is an accounting impairment model whose measurement objective is unbiased probability-weighted expected loss.

**RBI ECL** uses expected-loss measurement but overlays regulatory definitions, product floors, parameter backstops, NPA interaction, income-recognition rules and a capital transition.

An IFRS 9 model can supply methods and infrastructure. It cannot be copied into the RBI regime without a regulatory gap analysis.

## 5. ECL staging and NPA classification coexist

Stage and NPA status answer different questions. Stage determines the ECL horizon and treatment. NPA is a prudential asset-classification state.

| State | What it means | Immediate consequence |
|---|---|---|
| Stage 1 | No SICR since initial recognition, or qualifying low-credit-risk treatment | 12-month ECL |
| Stage 2 | SICR, but not credit-impaired | Lifetime ECL |
| Stage 3 | Credit-impaired | Lifetime ECL; borrower-level Stage 3 application |
| NPA | Meets the RBI non-performing criteria | Prudential non-performing classification and associated income-recognition consequences |

The final Directions define “default” for their own purposes as NPA status. Credit impairment also includes objective evidence such as financial distress, lender concessions and high probability of insolvency. The stage architecture therefore uses more information than a single delinquency counter.

### Never confuse [Stage 3] and [NPA]

**Stage 3** is the ECL credit-impaired state.

**NPA** is the RBI prudential classification state.

The two are tightly connected in the final RBI framework. They remain separate objects because staging drives ECL measurement while NPA rules also drive classification, regulatory reporting and income recognition.

## 6. One deciding condition assigns Stage 1, Stage 2 or Stage 3

| Deciding condition | Stage | Allowance horizon | Application level |
|---|---|---|---|
| No SICR since initial recognition and not credit-impaired | Stage 1 | 12-month ECL | Instrument or portfolio as appropriate |
| SICR since initial recognition, but not credit-impaired | Stage 2 | Lifetime ECL | Facility level |
| Credit-impaired at reporting date | Stage 3 | Lifetime ECL | Borrower level |
| POCI at initial recognition | Separate POCI treatment | Cumulative change in lifetime ECL | Asset-specific POCI treatment |

Stage assignment happens before ECL amount. A model cannot decide the allowance horizon after seeing which answer produces the desired provision.

Where one exposure to a borrower enters Stage 3, all exposures to that borrower, including non-funded exposures, are classified Stage 3. Stage 2 remains facility-level. That asymmetry matters for systems design. The staging engine needs both facility and borrower keys.

## 7. SICR measures deterioration from the risk accepted at initial recognition

SICR asks how much the risk of default over the remaining expected life has changed since the asset was first recognised. Current risk is compared with its own starting point.

```text
Risk at initial recognition
→
Risk over the remaining life at the reporting date
→
Change significant?
→
No: Stage 1
Yes: Stage 2, unless already credit-impaired
```

A borrower can have a moderate current PD and still have SICR if it originated at very low risk. Another borrower can have a higher absolute PD without SICR if that level was already reflected at origination and has not deteriorated significantly.

The assessment uses reasonable and supportable information available without undue cost or effort. Rating migration, pricing changes, borrower distress, covenant deterioration, restructuring signals, sector weakness and macroeconomic changes can all matter. If a bank uses a particular trigger, its policy must define it and apply it consistently.

The final Directions permit a 12-month change in default risk as an approximation for lifetime change only where default risk is not concentrated beyond twelve months and the exposure characteristics do not make that approximation misleading.

## 8. Backstops catch SICR that the primary indicators missed

A backstop is a last line of detection. It is not the definition of SICR.

Contractual payments more than 30 days past due create a rebuttable presumption of SICR. For revolving facilities, the Directions prescribe a specific excess-over-limit or drawing-power backstop. Rebuttal requires reasonable and supportable evidence, Board or Board-approved policy, consistent application and documentation. It cannot become a routine device for keeping accounts in Stage 1.

Certain low-risk exposures identified by the Directions do not require ordinary SICR testing and do not require Stage 1 ECL. These include specified sovereign and SLR-eligible exposures.

### Permanent trap: DPD-only SICR — waiting for the backstop and calling it the staging model

A staging process that moves accounts only after delinquency converts a forward-looking regime into a collections report. Rating deterioration, borrower distress and macroeconomic signals are meant to move risk before the backstop where the evidence exists.

## 9. Collective assessment catches deterioration before account-level evidence does

SICR can emerge first at portfolio level. A bank may assess a group collectively where exposures share credit-risk characteristics and the common information reveals deterioration that account-level data has not yet captured.

Useful characteristics include instrument type, internal or external rating, collateral type, remaining maturity, industry, geography and collateral value relative to the exposure where that affects default risk.

```text
Shared risk characteristic
→
Common deterioration observable
→
Identify affected subset
→
Collective SICR for that subset
→
Lifetime ECL
```

The entire segment does not migrate merely because part of it deteriorates. The affected subset must be identifiable. Equally, a broad pool cannot be used to hide the deterioration of a smaller group.

Collective staging and collective ECL measurement can use the same segmentation infrastructure, but they are not identical decisions. One asks whether risk has increased significantly. The other asks how expected loss should be estimated for exposures with common behaviour.

## 10. Stage 3 is borrower-level and cure does not automatically mean Stage 1

Stage 3 applies when the asset is credit-impaired. Objective evidence includes NPA status, financial distress, concessions granted because of financial difficulty, high probability of insolvency and acquisition at a discount reflecting inherent credit loss.

For non-restructured exposures, removal of the irregularity that caused Stage 3 can permit direct return to Stage 1 only when no SICR remains. If SICR evidence remains, the exposure moves to Stage 2.

Restructured accounts follow the applicable RBI resolution requirements for upgradation. The ECL stage does not override those prudential gates.

The borrower-level rule is operationally important. A Stage 3 event on one facility propagates across all exposures to the borrower. Cure therefore also needs a borrower-wide view. Facility-level payment status alone is insufficient.

## 11. Twelve-month ECL is not twelve months of cash loss

Twelve-month ECL is the portion of lifetime expected loss that results from default events possible within the next twelve months. The loss consequence of an included default can extend well beyond month twelve.

| Question | 12-month ECL | Lifetime ECL |
|---|---|---|
| Default-event window | Next 12 months | Entire relevant remaining life |
| Recovery period after an included default | Can extend beyond 12 months | Can extend across the remaining workout life |
| Typical RBI use | Stage 1 | Stage 2 and Stage 3 |
| Main staging driver | No SICR | SICR or credit impairment |

A default in month nine can generate recovery shortfalls in later years. Those later shortfalls still belong in Stage 1 ECL because the default event itself occurred within the 12-month window.

### Never confuse [12-month ECL] and [twelve months of losses]

**12-month ECL** restricts the default-event horizon.

**Twelve months of losses** would restrict cash shortfalls to the next year. That is not the measurement required.

## 12. Lifetime ECL follows the relevant exposure life

The lifetime horizon is not always the contractual maturity printed in a product master.

For an ordinary financial instrument without an undrawn component, the maximum horizon is the maximum contractual period, including extension options, over which the bank is exposed to credit risk. Business practice alone does not justify a longer horizon.

Loan commitments and revolving facilities are different. A contractual ability to cancel can fail to limit the period of practical exposure where risk-management actions do not eliminate credit risk. The bank therefore considers drawdown behaviour, renewal practice, limit reductions, cancellation effectiveness and historical default patterns.

A macroeconomic forecast horizon is another object. The model can need ECL over five years while detailed macro forecasts are supportable for a shorter period. The remaining horizon is handled through governed extrapolation or mean reversion, not by truncating ECL.

## 13. Revolving and undrawn exposures need a behavioural exposure path

A current zero balance can still produce material ECL when the borrower can draw before default.

| Exposure | Main lifetime question | Main EAD question |
|---|---|---|
| Amortising term loan | Contractual term including extensions | Balance after amortisation and prepayment |
| Loan with undrawn commitment | Period credit exposure persists despite cancellation rights | Expected future draw plus funded balance |
| Revolver without automatic renewal | Whether renewal is substantive | Utilisation and limit management before default |
| Revolver with automatic renewal | Behavioural exposure period | Drawdown and cancellation effectiveness |
| Financial guarantee | Maximum contractual obligation period | Expected amount payable if default occurs |

A renewal date is a valid horizon boundary only where renewal is substantive. The bank must show that renewal can change terms, pricing, limits, security or continuation based on fresh credit assessment.

For 12-month ECL on a commitment, expected drawdowns within the next twelve months matter. For lifetime ECL, expected drawdowns over the relevant exposure life matter.

## 14. ECL measures a probability-weighted discounted cash shortfall

The underlying loss object is a shortfall in amount or timing. PD, LGD and EAD are a way of estimating it.

```text
Credit loss = PV of contractual cash flows due - PV of cash flows expected to be received
```

PV of contractual cash flows due  
Present value of payments the contract requires.

PV of cash flows expected to be received  
Present value of expected borrower payments plus eligible recoveries, net of relevant recovery costs.

Worked: ₹10.00 lakh is contractually due in one year. Only ₹9.20 lakh is expected in one year. At a 10% discount rate, contractual PV is ₹9.09 lakh and expected-receipt PV is ₹8.36 lakh. Credit loss is ₹0.73 lakh, or about ₹72,727.

A delay can create credit loss even when nominal principal is eventually recovered. If ₹10 lakh arrives materially later than promised, its present value is lower.

ECL then probability-weights those credit losses across relevant scenarios. The measurement objective is neither a worst case nor a best case.

## 15. ECL needs account-level history across origination, deterioration, default and recovery

The model cannot reconstruct lifetime behaviour from a current snapshot. History must connect origination, risk migration, utilisation, default, recovery and closure.

| Required history | Common gap | Accepted implementation response | Effect on estimate |
|---|---|---|---|
| Loan-level origination terms and dates | Legacy contracts not digitised | Reconstruct from core banking and document archive | Weakens origination-risk and EIR evidence where incomplete |
| Internal ratings or scores through time | Rating history starts late | Bureau or external rating history; calibrated proxy | Weakens SICR and transition estimates |
| At least one representative credit cycle where available | Portfolio is newer than a full cycle | External benchmark plus internal recent experience | Weakens cyclicality calibration |
| Default and cure dates | Historic status overwritten | Rebuild from delinquency snapshots and collections systems | Weakens duration and cure estimates |
| Recovery cash flows and workout timing | Recoveries held only as cumulative totals | Legal, collections and recovery-ledger reconstruction | Weakens LGD timing and discounting |
| Collateral values and revaluation dates | Only current value retained | Valuation files and secured-lending records | Weakens downturn and Stage 3 recovery estimates |
| Restructuring and concession flags | Free-text or missing | Resolution-system events and manual remediation | Weakens SICR and credit-impairment identification |
| Revolver limits, drawings and repayments | Only month-end balance retained | Transaction history and limit-change records | Weakens behavioural EAD |
| Write-off and post-write-off recovery | Written-off accounts archived separately | Join write-off register to recovery ledger | Weakens ultimate LGD |

The Directions require sufficiently granular historical data over an adequately representative period. They do not prescribe one universal number of years. The evidence must capture variation across the credit cycle and relevant outliers.

## 16. Segmentation must balance risk homogeneity against statistical stability

Segmentation creates pools that are similar enough to share risk behaviour and large enough to support estimation.

| Design question | Sound treatment | Failure |
|---|---|---|
| Risk drivers differ materially | Split the pool | Mixing unlike risk masks deterioration |
| Pool has too few defaults or recoveries | Merge on economically defensible dimensions or use benchmark methods | False precision from tiny cells |
| Product behaves differently by geography or borrower type | Test the split empirically | Mechanical segmentation with no risk effect |
| Pool composition changes materially over time | Re-segment and recalibrate | Historical parameter no longer represents current book |
| A subgroup deteriorates while the rest is stable | Isolate the subgroup | Group performance masks SICR |
| Statistical stability improves only by combining different economics | Keep separate and use a more constrained method | Stable statistic with wrong meaning |

The final Directions prescribe no numeric minimum observation count per pool. A bank sets governed internal thresholds by model and portfolio. Those thresholds must reflect event counts, recovery observations, estimation method and validation results.

### Permanent trap: Pool fragmentation — segmentation continued until every pool loses statistical credibility

More granularity is not automatically more risk sensitivity. A pool with three defaults can look perfectly differentiated and still be unusable for reliable calibration. Homogeneity and statistical depth are joint constraints.

## 17. PD, LGD, EAD, EIR and scenario weights contribute different things to one loss estimate

| Parameter | What it contributes | Time dimension | Main evidence |
|---|---|---|---|
| PD | Probability that default occurs | 12-month or lifetime term structure | Ratings, scores, defaults, macro conditions |
| LGD | Loss severity conditional on default | Recovery amount and timing | Collections, collateral, guarantees, workout costs |
| EAD | Exposure when default occurs | Balance and drawdown path | Amortisation, prepayment, utilisation, limits |
| EIR | Time value used for discounting | From initial recognition through expected cash flows | Contractual cash flows, integral fees, transaction costs |
| Scenario weight | Probability of each macroeconomic path | Across forecast scenarios | Economic history, forecasts, expert judgement |

A coherent ECL engine describes the same possible default event across all five inputs. A year-two marginal PD cannot sensibly be combined with today’s balance when the loan amortises heavily before year two. A recovery expected three years after default cannot be treated as immediate without overstating value.

The parameters also need consistent default definitions. An internal PD calibrated to one definition and an LGD observed under another can create a numerically neat but conceptually invalid loss estimate.

## 18. Basel parameters cannot be lifted unadjusted into ECL

Basel credit-risk parameters are built for a different objective. Reuse is possible only after conversion.

| Dimension | Basel-style regulatory parameter | ECL parameter |
|---|---|---|
| PD tendency | Often through-the-cycle or conservatively calibrated for capital | Point-in-time and forward-looking over the relevant ECL horizon |
| LGD tendency | May contain downturn conservatism and regulatory floors | Expected recovery severity under probability-weighted current and forecast conditions |
| EAD tendency | Regulatory CCF or capital exposure measure | Behavioural exposure expected at each possible default date |
| Horizon | Capital framework horizon and definitions | Stage-dependent 12-month or lifetime ECL |
| Conservatism | Prudential conservatism may be deliberate | Estimate must remain unbiased before RBI ECL backstops and floors are applied |
| Use of macro conditions | Capital calibration can smooth cycles | ECL must reflect current and forecast conditions |
| Default definition | Regulatory definition | Must align with the default definition used by the RBI ECL framework |

Conversion usually begins with the existing model, removes conservatism that does not represent expected conditions, shifts PD towards point-in-time behaviour, produces a term structure, replaces downturn LGD with expected recovery paths, and replaces regulatory CCFs with behavioural drawdown estimates where reliable data supports them. The converted outputs then remain subject to RBI ECL backstops.

### Never confuse [Basel risk parameters] and [ECL parameters]

**Basel parameters** support regulatory capital and can deliberately contain cycle smoothing, downturn treatment and prudential constraints.

**ECL parameters** estimate expected cash loss at the reporting date under current and forecast conditions.

Using an IRB PD unchanged because it already has the label “PD” is a model-definition error.

### Permanent trap: Basel PD used unadjusted — a capital calibration dropped directly into ECL

A through-the-cycle PD can suppress current-cycle movement and distort both staging and ECL. Reuse requires an evidenced conversion to the reporting-date and lifetime objective, not a label match.

## 19. The ECL engine must align default timing, exposure, severity and discounting

A common implementation calculates loss period by period.

```text
ECL = sum over t of (Marginal PD_t x EAD_t x LGD_t x DF_t)
```

Marginal PD_t  
Probability that default first occurs in period t.

EAD_t  
Exposure expected if default occurs in period t.

LGD_t  
Expected loss fraction conditional on default in period t.

DF_t  
Discount factor from period t to the reporting date.

Worked: a one-year Stage 1 exposure has marginal PD of 2%, EAD of ₹10 lakh, LGD of 40% and a discount factor of 0.9091. ECL is 2% x ₹10 lakh x 40% x 0.9091 = ₹7,273.

For lifetime ECL, the sum extends across mutually exclusive future default periods. The calculation does not add cumulative PDs across years. That would count the same default more than once.

The formula is an implementation architecture. The governing measurement target remains the discounted expected cash shortfall.

## 20. Lifetime PD needs a precise probability vocabulary

Four probabilities describe the same default process from different angles.

| Quantity | Meaning |
|---|---|
| Cumulative PD to year t | Probability that default has occurred by the end of year t |
| Marginal PD in year t | Unconditional probability that default first occurs in year t |
| Survival probability to start of year t | Probability that the exposure has not defaulted before year t |
| Conditional PD in year t | Probability of default during year t, conditional on survival to its start |

```text
Marginal PD_t = Cumulative PD_t - Cumulative PD_(t-1)

Survival_t = 1 - Cumulative PD_(t-1)

Conditional PD_t = Marginal PD_t / Survival_t
```

Marginal PD_t  
Default probability allocated specifically to period t.

Cumulative PD_t  
Probability of default from the observation date through period t.

Survival_t  
Probability of reaching the start of period t without default.

Conditional PD_t  
Default probability during period t for exposures that survived to that point.

Worked: if cumulative PD is 2% at year 1, 5% at year 2 and 9% at year 3, marginal PDs are 2%, 3% and 4%. Survival at the start of years 1, 2 and 3 is 100%, 98% and 95%. Conditional PDs are 2.00%, 3.06% and 4.21%.

| Year | Cumulative PD | Marginal PD | Survival to start | Conditional PD |
|---:|---:|---:|---:|---:|
| 1 | 2.00% | 2.00% | 100.00% | 2.00% |
| 2 | 5.00% | 3.00% | 98.00% | 3.06% |
| 3 | 9.00% | 4.00% | 95.00% | 4.21% |

### Mental model: one default, four views

Cumulative PD asks whether default has happened by a horizon. Marginal PD asks when it first happens. Survival asks who remains available to default. Conditional PD asks how many of those survivors default in the next interval.

## 21. Lifetime PD estimation method follows portfolio structure

No single lifetime-PD technique fits every portfolio.

| Portfolio characteristic | Approach that fits | What fails |
|---|---|---|
| Large retail book with stable origination vintages | Cohort or vintage analysis | Mixing vintages with different underwriting standards |
| Stable internal rating grades with enough migrations | Transition matrix | Sparse cells and unstable long-horizon matrix powers |
| Irregular observation periods, prepayment and censoring matter | Survival analysis | Treating censored accounts as if they survived to maturity |
| Strong 12-month PD model but limited lifetime history | Scalar or multiplier approach | Mechanical scaling that ignores changing hazard through time |
| Mature book with clear age effects | Vintage curve | Applying one curve across products with different seasoning |
| Low-default corporate or sovereign book | External benchmark, constrained transition or expert-supported approach | Fitting a complex internal curve to almost no defaults |

Cohort methods observe cumulative defaults by origination group. Transition matrices convert movements between rating states into future default probabilities. Survival models estimate a time-varying hazard while handling censored observations. Vintage approaches exploit seasoning patterns. Scalar approaches extend a shorter-horizon PD using empirically supported multipliers.

The method is chosen by data and portfolio behaviour. Complexity is not a substitute for information.

## 22. Low-default portfolios need constrained methods rather than fabricated calibration

Large corporate, sovereign and specialised books can have too few defaults to fit stable internal curves. A model still needs a probability estimate. It does not need fictitious precision.

Accepted approaches include external default studies mapped to internal grades, rating-agency transition matrices, pooled industry data, internal grades calibrated to external long-run evidence, Bayesian shrinkage, structural credit information and expert-supported benchmarks. Each creates basis risk because the external population is not identical to the bank’s portfolio.

| Approach | Strength | Limit |
|---|---|---|
| External rating default study | Deep history | Rating mix and geography may differ |
| External transition matrix | Lifetime structure | Mapping internal grades is judgemental |
| Pooled industry data | More defaults | Lending standards can differ |
| Bayesian or shrinkage estimate | Stabilises sparse internal data | Prior choice matters |
| Expert benchmark | Works where data is structurally scarce | Governance burden is high |
| Market-implied information | Timely for traded names | Noisy and unavailable for many borrowers |

The Directions permit suitable benchmarks where historical default or LGD data is unavailable. Those benchmarks require periodic validation. A low-default portfolio is a reason to simplify and constrain. It is not a reason to pretend that a fitted coefficient is reliable.

## 23. EAD follows the balance and utilisation path to each possible default date

EAD is future exposure conditional on default at a future point. It is not the current balance repeated across every period.

```text
EAD_t = Expected funded balance_t + Expected future draw_t
```

Expected funded balance_t  
Principal expected to remain outstanding at the possible default date.

Expected future draw_t  
Amount of currently undrawn commitment expected to be used before default.

Worked: a revolver has ₹60 lakh drawn and ₹40 lakh undrawn. If ₹8 lakh of the undrawn amount is expected to be drawn before a year-one default, EAD is ₹68 lakh.

For term loans, EAD falls with amortisation and prepayment. For revolving facilities, stress can increase utilisation before default. Guarantees and commitments require an estimate of the amount expected to become exposed when the counterparty defaults.

The final Directions require internal EAD where it can be reliably estimated. Regulatory CCFs are a fallback where reliable internal EAD is unavailable. Credit-risk mitigants are not netted from EAD. Their effect belongs primarily in LGD.

## 24. LGD is the discounted recovery shortfall after default

LGD measures how much of EAD is lost after expected borrower collections, collateral proceeds, guarantees and workout costs are considered at their expected timing.

```text
LGD = (EAD - PV of expected net recoveries) / EAD
```

EAD  
Exposure at the default date.

PV of expected net recoveries  
Discounted borrower, collateral and guarantee recoveries after recovery costs.

Worked: EAD is ₹10 lakh. Net recovery of ₹6 lakh is expected two years after default. At a 10% discount rate, recovery PV is about ₹4.96 lakh. Loss is about ₹5.04 lakh and LGD is about 50.4%.

Collateral therefore changes severity, not the borrower’s contractual obligation. A ₹6 lakh property value is not automatically a ₹6 lakh recovery. Time to sale, legal costs, senior claims, valuation uncertainty and enforceability all matter.

For Stage 3 exposures above the collateral-valuation threshold specified by the final Directions, valuation frequency becomes a specific regulatory control. Stock collateral has a separate minimum valuation frequency. Those numbers are consolidated with the other thresholds rather than embedded in model assumptions.

## 25. The macro model must be statistically useful, economically believable and explicit about its forecast horizon

Forward-looking ECL changes when economic conditions change. The model must show how.

| Test | Question | Required response when weak |
|---|---|---|
| Economic mechanism | Why should the variable affect default or recovery? | Reject variables with no defensible mechanism |
| Sign | Does the direction make economic sense? | Investigate specification, lag and interactions |
| Statistical strength | Is the relationship distinguishable from noise? | Simplify or use governed credit judgement |
| Multicollinearity | Are variables duplicating the same signal? | Remove or combine unstable predictors |
| Out-of-time performance | Does the relation survive a later period? | Refit, simplify or constrain |
| Scenario coherence | Do PD, LGD and EAD move consistently within one scenario? | Rebuild inconsistent scenario assumptions |
| Forecast horizon | How long are detailed forecasts supportable? | Set a governed horizon by variable and portfolio |
| Beyond forecast horizon | How does the model return to normal conditions? | Use documented extrapolation or mean reversion |

The final Directions do not prescribe one fixed number of years as a supportable forecast period. The bank establishes a period over which macro forecasts remain defensible. Lifetime ECL can extend beyond it. Beyond the detailed forecast horizon, assumptions move through a governed path towards long-run conditions rather than holding an extreme forecast forever.

```text
Probability-weighted ECL = sum over s of (Scenario weight_s x ECL_s)
```

Scenario weight_s  
Probability assigned to scenario s.

ECL_s  
ECL calculated under the internally consistent assumptions for scenario s.

Worked: base ECL is ₹1.00 lakh with 60% weight, downside ECL ₹2.50 lakh with 25% weight, and upside ECL ₹0.60 lakh with 15% weight. Probability-weighted ECL is ₹0.60 lakh + ₹0.625 lakh + ₹0.09 lakh = ₹1.315 lakh.

### Permanent trap: Wrong-sign macro model retained because it fitted

A coefficient that says improving economic conditions raise defaults requires an economic explanation. A good in-sample fit does not rescue a wrong-sign relationship created by collinearity, a structural break or a spurious trend.

## 26. EIR makes the timing of expected shortfalls part of the loss estimate

The effective interest rate is the rate that discounts expected contractual cash flows over the expected life of the instrument to its gross carrying amount at initial recognition. Integral fees, transaction costs, premiums and discounts enter the calculation. Expected credit losses do not.

For ECL, future shortfalls are discounted using the EIR determined at initial recognition for instruments originated or invested on or after 1 April 2027. A POCI asset uses its credit-adjusted EIR. For legacy loans, the Directions allow an interim contractual-rate approach but require migration to EIR by the prescribed deadline.

```text
PV of shortfall_t = Shortfall_t / (1 + EIR)^t
```

Shortfall_t  
Expected credit cash shortfall in period t.

EIR  
Effective interest rate per period.

t  
Number of periods from the reporting date.

Worked: an expected shortfall of ₹1 lakh two years from now discounted at 10% has a present value of ₹1,00,000 / 1.10² = about ₹82,645.

For commitments, the discount rate is the EIR or an approximation of the rate that would apply to the resulting funded asset. For revolvers and guarantees where EIR cannot be determined directly, the Directions require a rate reflecting time value and risks specific to those cash flows.

## 27. Stages 1 and 2 use gross-basis EIR; Stage 3 income is cash-basis under RBI

The final RBI income-recognition rule is not the Ind AS 109 Stage 3 interest model.

| Credit state | RBI income recognition for covered loans originated from 1 April 2027 |
|---|---|
| Stage 1 | EIR applied to gross carrying amount |
| Stage 2 | EIR applied to gross carrying amount |
| Stage 3, not POCI at initial recognition | Interest is not accrued; income recognised on cash basis |
| POCI | Interest is not accrued; income recognised on cash basis |
| Credit-impaired asset that later cures | EIR on gross carrying amount resumes after qualifying upgradation |

Legacy loans outstanding on 31 March 2027 can remain on contractual interest recognition in the interim. All loans must move to EIR income measurement by the transition deadline prescribed in the Directions.

This differs materially from Ind AS 109, where a non-POCI asset that becomes credit-impaired calculates interest using EIR on amortised cost, effectively the net carrying amount.

### Never confuse [Stage 3 ECL discounting] and [Stage 3 interest recognition]

**Stage 3 ECL discounting** still measures future cash shortfalls at present value.

**Stage 3 interest recognition under the RBI Directions** is cash-basis. A discounted ECL model does not create permission to accrue Stage 3 interest income.

## 28. The discount unwind changes ECL present value; it does not create accrued Stage 3 interest

A discounted shortfall becomes larger in present-value terms as the expected recovery date gets closer, even when the expected nominal recovery has not changed. This is the discount unwind.

```text
Unwind over one period = PV after one period of passage of time - opening PV
```

PV after one period of passage of time  
Present value after the recovery is one period closer, with other assumptions unchanged.

Opening PV  
Present value at the previous reporting date.

Worked: a ₹1 lakh shortfall due in two years has PV of about ₹82,645 at 10%. One year later, with the shortfall still expected one year ahead, PV is about ₹90,909. The passage-of-time unwind is about ₹8,264.

Under Ind AS 109, net-interest mechanics on credit-impaired assets make the discount unwind closely connected to interest recognition. The final RBI Directions instead require cash-basis income recognition for credit-impaired assets. The ECL engine must therefore keep analytical discount-unwind movement separate from accrued interest income.

The Directions do not prescribe a separate labelled P&L line called “discount unwind”. In implementation, the passage-of-time movement in the allowance remains part of impairment/provision movement unless cash interest recognition is triggered under the RBI income rule.

## 29. POCI assets start with credit impairment embedded in the effective yield

A purchased or originated credit-impaired asset is already impaired when first recognised. Its starting economics therefore cannot be treated as an ordinary Stage 3 migration.

```text
Credit-impaired at initial recognition
→
Estimate expected cash flows including initial expected credit loss
→
Determine credit-adjusted EIR
→
No ordinary separate initial impairment allowance
→
Recognise cumulative changes in lifetime ECL after initial recognition
```

The credit-adjusted EIR discounts the expected cash flows of the POCI asset to its initial amortised cost. Initial expected loss is embedded in those expected cash flows. Subsequent improvement or deterioration is measured as the cumulative change in lifetime ECL relative to the initial estimate.

For ECL computation, the credit-adjusted EIR is the discount rate. For income recognition, the final RBI Directions require POCI income to be recognised on cash basis. This is another point where Ind AS 109 mechanics do not transfer unchanged to the RBI regime.

## 30. Management overlays exist only for named residual model limitations

An overlay is a controlled adjustment for risk that the core model does not capture adequately. It is not a reserve target.

| Required evidence | What must be present |
|---|---|
| Residual risk | Named risk or model limitation |
| Evidence | Data, events or model diagnostics showing the gap |
| Quantification | Method linking evidence to the adjustment |
| Double-counting test | Proof that scenarios and parameters do not already capture the risk |
| Approval | Defined committee and authority |
| Validation | Challenge proportionate to materiality |
| Remediation | Model or data action if the issue is structural |
| Sunset | Condition under which the overlay reduces or disappears |

Examples include a new risk not present in model history, a data break, a temporary model operating-boundary breach or a shock whose transmission is not represented in the existing macro model.

### Permanent trap: Overlay with no sunset — a temporary adjustment that becomes an undocumented permanent reserve

An overlay that survives because “it was there last quarter” is a parallel model without validation. Every material overlay needs an exit test and an owner responsible for executing it.

## 31. Modelled ECL is not the final RBI provision when a prudential minimum is higher

The model estimates expected loss. RBI floors can require a higher allowance.

```text
Pre-floor ECL = Modelled ECL + approved management overlay

Final RBI ECL allowance = max(Pre-floor ECL, applicable prudential floor)
```

Modelled ECL  
Probability-weighted discounted expected credit loss.

Approved management overlay  
Governed adjustment for residual model limitation.

Applicable prudential floor  
Minimum provision calculated under the RBI product, stage and application rules.

Worked: modelled ECL is ₹3.20 lakh and an approved overlay is ₹0.30 lakh. Pre-floor ECL is ₹3.50 lakh. The applicable prudential floor is ₹4.00 lakh. Final RBI ECL allowance is ₹4.00 lakh.

Additional provisions required by other RBI directions remain additional where the governing rule says so. The ECL floor is not a licence to ignore other prudential provisioning.

### Never confuse [modelled ECL] and [RBI prudential provision]

**Modelled ECL** is the estimated expected loss.

**RBI prudential provision** is the recognised regulatory amount after floors and other applicable prudential requirements.

A model can be statistically sound and still produce an allowance below the regulatory minimum.

## 32. Every threshold, floor and transition date belongs in one control table

The table below is the numeric control surface for the subject. Each regulatory value was sourced during drafting from the final Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026 dated 27 April 2026. This is not an independent verification state.

| Rule | Value |
|---|---:|
| Commencement of final RBI ECL Directions | 1 April 2027 |
| IRACP continues until | 31 March 2027 |
| Ordinary term-loan NPA delinquency | More than 90 days overdue |
| SICR delinquency backstop | More than 30 DPD |
| Revolving SICR excess-limit/drawing-power backstop | Up to 60 days under the wording of the Directions; operational interpretation requires independent verification |
| Stage 3 collateral valuation threshold | Exposure beyond ₹7.5 crore |
| Stage 3 collateral revaluation minimum frequency above threshold | At classification and at least once every 2 years |
| Stock collateral valuation frequency | At least annually |
| Minimum regulatory 12-month PD | 0.03% |
| Fallback LGD, secured portion | 65% |
| Fallback LGD, unsecured portion | 70% |
| Fallback LGD for specified eligible collateral | 30% |
| Unconditionally cancellable commitment CCF where prescribed conditions are met | 5% |
| Secured retail: Stage 1 / Stage 2 | 0.40% / 5% |
| Corporate loan: Stage 1 / Stage 2 | 0.40% / 5% |
| Small and Micro enterprise: Stage 1 / Stage 2 | 0.25% / 5% |
| Medium enterprise: Stage 1 / Stage 2 | 0.40% / 5% |
| Farm credit to agricultural activities: Stage 1 / Stage 2 | 0.25% / 5% |
| Loans to banks, NBFCs and other regulated FIs: Stage 1 / Stage 2 | 0.40% / 5% |
| Loan against term deposit, LIC policy or Kisan Vikas Patra: Stage 1 / Stage 2 | 0.40% / 0.40% |
| Gold loan: Stage 1 / Stage 2 | 0.40% / 1.50% |
| Direct State Government / State-guaranteed exposure: Stage 1 / Stage 2 | 0.40% / 2.50% |
| Unsecured retail loan: Stage 1 / Stage 2 | 1% / 5% |
| Housing loan to individuals: Stage 1 / Stage 2 | 0.25% / 1.50% |
| CRE (ADC), specified high-risk-weight real-estate claims: Stage 1 | 1.25% |
| CRE DCCO-deferment additional provision | 0.5625% per quarter of deferment |
| CRE credit event other than DCCO deferment: Stage 2 | 5% |
| CRE-RH (ADC): Stage 1 | 1% |
| Other claims secured by residential real estate: Stage 1 / Stage 2 | 0.40% / 1.50% |
| Other claims secured by commercial real estate: Stage 1 / Stage 2 | 0.40% / 2.50% |
| Other project finance, pre-operational Stage 1 | 1% |
| Infrastructure project DCCO-deferment additional provision | 0.375% per quarter |
| Non-infrastructure project DCCO-deferment additional provision | 0.5625% per quarter |
| Other project finance credit event other than DCCO deferment: Stage 2 | 5% |
| Other project finance operational: Stage 1 / Stage 2 | 0.40% / 5% |
| Specified Central Government-guaranteed exposures: Stage 1 / Stage 2 | 0.25% / 0.25% |
| Specified Central Government guarantee claim unsettled from loan due date | 90 days to Stage 3 treatment |
| Natural-calamity restructured standard advance: Stage 1 / Stage 2 after SICR | 5% / 10% |
| Residual loan category: Stage 1 / Stage 2 | 0.40% / 5% |
| Stage 3 family A, secured / unsecured: 0–1 year | 25% / 40% |
| Stage 3 family A, secured / unsecured: 1–2 years | 40% / 100% |
| Stage 3 family A, secured / unsecured: 2–3 years | 55% / 100% |
| Stage 3 family A, secured / unsecured: 3–4 years | 75% / 100% |
| Stage 3 family A: after 4 years | 100% |
| Stage 3 unsecured retail: 0–1 year / after 1 year | 25% / 100% |
| Stage 3 family B, secured / unsecured: 0–1 year | 10% / 25% |
| Stage 3 family B, secured / unsecured: 1–2 years | 20% / 100% |
| Stage 3 family B, secured / unsecured: 2–3 years | 30% / 100% |
| Stage 3 family B, secured / unsecured: 3–4 years | 40% / 100% |
| Stage 3 family B: more than 4 years | 100% |
| Stage 3 other residential/commercial real estate, secured / unsecured: 0–1 year | 15% / 25% |
| Same family: 1–2 years | 25% / 100% |
| Same family: 2–3 years | 40% / 100% |
| Same family: 3–4 years | 55% / 100% |
| Same family: more than 4 years | 100% |
| Legacy loans fully migrated to EIR | No later than 31 March 2030 |
| First ECL reporting position | 30 June 2027 |
| First required previous-year comparatives under ECL reporting | 31 March 2028 |
| Parallel quarterly unaudited IRACP reporting continues through | 31 December 2027 |
| CET1 transition 2027-28 | Maximum 4/5 of net-of-tax transitional adjustment |
| CET1 transition 2028-29 | Maximum 3/5 |
| CET1 transition 2029-30 | Maximum 2/5 |
| CET1 transition 2030-31 | Maximum 1/5 |
| End of CET1 transition | 31 March 2031 |
| Minimum observations per modelling pool | No RBI numeric minimum prescribed; the bank must set and govern its own statistical sufficiency threshold |
| Supportable detailed macro forecast period | No fixed RBI number prescribed; the bank must govern the supportable period and reversion method |

Stage 3 family A covers the product groups for which the Directions prescribe the 25/40 progressing to 100 schedule, including corporate, SME, bank/NBFC/FI, specified project and residual categories. Stage 3 family B covers the 10/25 progressing to 100 schedule, including housing loans to individuals, gold loans and the specified deposit/policy-backed categories. The real-estate 15/25 schedule applies to the designated other residential and commercial real-estate claims.

## 33. Product category and stage determine the applicable prudential floor

The floor process is a classification decision before it is arithmetic.

| Decision | Treatment |
|---|---|
| Identify loan product at origination | Assign the RBI product category from inherent characteristics and collateral |
| Exposure remains Stage 1 | Apply the product’s Stage 1 floor |
| Exposure moves to Stage 2 | Apply the product’s Stage 2 floor |
| Exposure moves to Stage 3 | Apply the relevant ageing and secured/unsecured floor at individual account level |
| Stage 1 or Stage 2 portfolio | Floor is applied on a portfolio basis by product and stage unless bank policy applies it at account level |
| Investment subject to ECL | Use the floor corresponding to the issuer’s equivalent loan category |
| Undrawn commitment | Apply corresponding loan floor after CCF |
| Financial guarantee or other off-balance-sheet exposure | Apply corresponding loan floor after CCF |
| Product characteristics materially change | Reassess classification under governed policy |

Product categories cannot be blended to reduce the result. A gold loan does not become “secured retail” merely because both have collateral. The classification is part of the provisioning control environment.

Stage 3 is stricter. Its floor is mandatory at individual account level. Secured and unsecured portions can carry different percentages. Collateral eligibility therefore affects the floor as well as modelled LGD.

## 34. Regulatory PD, LGD and EAD backstops constrain weak internal estimates

RBI expects internal estimation where the bank can do it reliably. Backstops are not the default modelling method.

The 12-month PD is subject to a regulatory minimum. Internal PD can exceed it. It cannot go below it for ECL computation.

LGD is expected to use the bank’s own historical information and relevant data. Where reliable internal estimation is unavailable, the Directions provide fallback values for secured and unsecured portions, with a lower fallback for a narrow set of specified eligible collateral. The fallback is a prudential substitute for missing reliable estimation, not evidence that every secured loan has one universal recovery pattern.

EAD likewise begins with internal behavioural estimation. For commitments and guarantees, the estimate reflects the amount expected to be drawn or exposed at default. If reliable internal estimation is unavailable, the applicable regulatory CCF becomes the fallback.

An internal estimate that merely reproduces the regulatory backstop has not demonstrated model capability. A mature model explains why its own parameter is reliable and then applies the regulatory minimum where required.

## 35. One exposure can be followed from Stage 1 through SICR to the closing allowance walk

Consider a secured corporate term loan with gross exposure of ₹100 lakh at the first reporting date. The example is illustrative. Regulatory floor percentages are the confirmed RBI values; model parameters are teaching assumptions.

At the first close, the exposure is Stage 1. EIR is 10%. Scenario-specific 12-month PDs are 0.50%, 1.00% and 0.30%. LGD is 40%. EAD is ₹100 lakh. Scenario weights are 60%, 25% and 15%.

```text
Scenario ECL = PD x EAD x LGD x DF
```

PD  
Scenario 12-month probability of default.

EAD  
Exposure expected at default.

LGD  
Expected loss severity.

DF  
One-year discount factor, here 0.9091.

Worked: base ECL = 0.50% x ₹100 lakh x 40% x 0.9091 = ₹0.182 lakh. Downside ECL is ₹0.364 lakh. Upside ECL is ₹0.109 lakh. Weighted modelled ECL is about ₹0.216 lakh.

The corporate Stage 1 floor is 0.40% of ₹100 lakh, or ₹0.400 lakh. The opening recognised allowance is therefore ₹0.400 lakh.

One period later, scheduled repayment has reduced gross exposure to ₹92 lakh. The borrower has suffered a material internal-rating downgrade and payments are 35 DPD. SICR exists. The exposure moves to Stage 2.

The lifetime engine produces the following scenario ECLs after updated lifetime PD curves, EAD paths, LGD and discounting:

| Scenario | Lifetime ECL | Weight | Weighted contribution |
|---|---:|---:|---:|
| Base | ₹5.80 lakh | 60% | ₹3.48 lakh |
| Downside | ₹8.60 lakh | 25% | ₹2.15 lakh |
| Upside | ₹3.80 lakh | 15% | ₹0.57 lakh |
| Total modelled |  |  | ₹6.20 lakh |

The scenario-weighted modelled lifetime ECL before overlay is ₹6.20 lakh. An approved residual-risk overlay of ₹0.800 lakh is then added, producing pre-floor ECL of ₹7.00 lakh. The Stage 2 corporate floor is 5% of ₹92 lakh, or ₹4.60 lakh. Pre-floor ECL is higher, so the closing recognised allowance is ₹7.00 lakh.

The recognised allowance therefore moves from ₹0.40 lakh to ₹7.00 lakh: an increase of ₹6.60 lakh.

| Movement driver | Allowance effect | Running allowance |
|---|---:|---:|
| Opening allowance |  | ₹0.400 lakh |
| Exposure run-off before deterioration | -₹0.032 lakh | ₹0.368 lakh |
| Stage migration: 12-month to lifetime horizon | +₹2.632 lakh | ₹3.000 lakh |
| PD/LGD/EAD remeasurement | +₹2.300 lakh | ₹5.300 lakh |
| Macroeconomic scenario remeasurement | +₹0.900 lakh | ₹6.200 lakh |
| Approved residual-risk overlay | +₹0.800 lakh | ₹7.000 lakh |
| Closing floor adjustment | ₹0.000 lakh | ₹7.000 lakh |

The modelled-ECL movements tie to ₹6.20 lakh before overlay: ₹0.400 lakh - ₹0.032 lakh + ₹2.632 lakh + ₹2.300 lakh + ₹0.900 lakh = ₹6.200 lakh. The final allowance movement also ties: -₹0.032 lakh + ₹2.632 lakh + ₹2.300 lakh + ₹0.900 lakh + ₹0.800 lakh = ₹6.600 lakh, taking the allowance from ₹0.400 lakh to ₹7.000 lakh.

### Mental model: one exposure, two closes, one explained allowance walk

The first close shows measurement and the floor. The second shows why Stage 2 is economically important: the default horizon changes before default occurs, then current parameters, macro conditions and overlays can add further movement.

## 36. The 31 March 2027 IRACP close must reconcile to the 1 April 2027 ECL opening

Transition is not a simple replacement of one provision percentage with another. The opening balance sheet has two distinct changes: fair valuation of the loan portfolio and introduction of ECL.

On 1 April 2027, the Directions require banks to fair value the entire loan portfolio. The difference between fair value and carrying amount immediately before transition goes to opening retained earnings, not current-period P&L. Where the facts show no material difference between carrying cost and fair value, carrying cost can be the best evidence of fair value.

The ECL transition then compares opening ECL with closing IRACP provisions.

| Bridge item | Illustrative amount |
|---|---:|
| Gross loan carrying amount at 31 March 2027 | ₹10,000 crore |
| Fair-value reduction on transition | ₹40 crore |
| Opening carrying amount after fair-value adjustment | ₹9,960 crore |
| IRACP provisions held at 31 March 2027 | ₹300 crore |
| ECL required at 1 April 2027 | ₹420 crore |
| Increase in provisioning attributable to ECL | ₹120 crore |

The ₹40 crore fair-value transition adjustment and the ₹120 crore ECL provisioning transition are separate effects. Both affect opening equity under the transition rules rather than being routed through the new year’s operating P&L.

Accounts that are NPA at 31 March 2027 do not become performing merely because the measurement framework changes. They retain NPA status until the underlying irregularities are cured under the applicable prudential rules.

## 37. The transition adjustment affects opening equity before CET1 relief is applied

The transitional capital mechanism phases the regulatory-capital effect. It does not phase the ECL allowance itself.

```text
Transitional adjustment = max(0, Opening ECL - Closing IRACP provisions)

Net transitional adjustment = Transitional adjustment x (1 - applicable tax rate)

Maximum CET1 add-back = Net transitional adjustment x permitted fraction
```

Opening ECL  
ECL required on 1 April 2027 using the 31 March 2027 balance-sheet position.

Closing IRACP provisions  
Provision stock held under IRACP at 31 March 2027.

Applicable tax rate  
Tax effect relevant to the transition adjustment.

Permitted fraction  
Maximum fraction for the financial year under the RBI glide.

Worked: opening ECL is ₹420 crore and closing IRACP provisions are ₹300 crore. Transitional adjustment is ₹120 crore. At an illustrative 30% tax rate, the net transitional adjustment is ₹84 crore. The maximum 2027-28 CET1 add-back is 4/5 x ₹84 crore = ₹67.20 crore.

| Financial year | Maximum fraction | Illustrative maximum CET1 add-back on ₹84 crore |
|---|---:|---:|
| 2027-28 | 4/5 | ₹67.20 crore |
| 2028-29 | 3/5 | ₹50.40 crore |
| 2029-30 | 2/5 | ₹33.60 crore |
| 2030-31 | 1/5 | ₹16.80 crore |
| After 31 March 2031 | Nil | Nil |

The bank records full ECL from commencement. The add-back is only a temporary regulatory-capital adjustment. A bank can choose a shorter transition.

If opening ECL is below closing IRACP provisions, the Directions permit the adjustment to be recorded directly in retained earnings rather than through P&L.

## 38. Non-FVTPL debt securities use ECL but do not behave like loans

Debt securities other than FVTPL instruments enter ECL where they meet the applicable investment-classification criteria. Their credit risk can be observed through information that does not exist for a bilateral loan.

| Dimension | Loan | Non-FVTPL debt security |
|---|---|---|
| Contractual exposure | Loan balance and undrawn amount | Principal and contractual security cash flows |
| Credit monitoring | Internal rating, repayment, covenant and account conduct | Issuer rating, market spread, payment performance, issuer information |
| EAD profile | Amortisation, prepayment and drawdown | Security principal profile and contractual cash flows |
| Recovery | Borrower collections and collateral | Issuer recovery, security ranking and collateral where relevant |
| Staging | SICR and credit impairment | Same ECL staging principle, using investment-relevant evidence |
| Prudential floor | Loan product category | Floor mapped from issuer’s corresponding loan product category |
| Income recognition | RBI loan rules | Investment income remains governed by the applicable RBI investment Directions |

An investment in a corporate bond therefore does not receive a generic “investment floor”. Its prudential floor follows the equivalent corporate-loan category. The same principle applies by issuer type.

The Directions also impose a prudential impairment treatment for FVTPL instruments that become non-performing. That is not ordinary ECL measurement and should not be mixed with the loss-allowance engine.

## 39. An ECL run is a controlled close process, not an ad hoc model execution

The operating cycle begins before the model starts.

```text
Source-system cut-off
→
Data freeze
→
Quality and completeness checks
→
Staging and segmentation
→
Parameter and scenario load
→
Soft-close ECL run
→
Finance and risk challenge
→
Approved overlays and corrections
→
Controlled rerun where required
→
Hard close
→
Ledger posting and disclosure pack
```

A monthly close can use the same pipeline with proportionate review. Quarter-end adds regulatory reporting, disclosure, auditor evidence and more formal governance. The quarter-end process cannot be a different model merely because scrutiny is higher.

A rerun is controlled by materiality and cause. A source-system error, incorrect staging feed or approved scenario correction can justify a rerun. An unexplained desire to reach a smoother allowance cannot.

Post-cut-off information is treated under a documented accounting policy. The question is whether it provides evidence about conditions existing at the reporting date or represents a new event after it. The decision and any adjustment survive in the close evidence pack.

## 40. Every close gate needs a producer, challenger, approver and surviving artefact

| Gate | Produced by | Challenged by | Approved by | Evidence that survives |
|---|---|---|---|---|
| Source cut-off and freeze | Data and finance operations | Data governance | Finance close owner | Source extracts, control totals, freeze timestamp |
| Stage assignment | Credit risk / model production | Independent risk challenge | Designated risk authority | Stage files, overrides, SICR evidence |
| Parameter load | Model production | Model monitoring / validation | Model owner under policy | Version, calibration date, parameter checks |
| Macro scenarios and weights | Economics / risk | Finance and model risk | Approved governance committee | Forecast pack, weights, rationale |
| Soft-close run | ECL production | Finance, credit risk, model risk | ECL close owner | Run ID, exception log, reconciliations |
| Management overlay | Finance / risk sponsor | Independent challenge | Authorised committee | Evidence pack, calculation, sunset |
| Hard-close run | ECL production | Finance control | CFO or delegated authority | Locked run, sign-offs, change log |
| Ledger posting | Finance | Financial control | Financial controller | Journal, account mapping, GL tie-out |
| Quarter-end disclosure | Finance | Risk, audit and disclosure control | Appropriate disclosure governance | Reconciliation, narrative, supporting schedules |
| Model-change release | Model owner | Independent validation | Model governance committee | Change request, test evidence, validation opinion |

The Board retains oversight of ECL implementation and ongoing functioning. The Directions require a Board committee or Board-approved committee including the CFO and CRO to oversee robust implementation.

The artefact is as important as the sign-off. A control that happened but left no reproducible evidence is weak evidence for audit and supervision.

## 41. Engine output must reconcile completely into the general ledger

The ECL engine produces risk-measurement output. Financial reporting requires complete ledger representation.

Three populations must reconcile independently: funded financial assets, undrawn commitments and other off-balance-sheet exposures. The population extracted for modelling must tie to source-system control totals before staging. The output must then tie to the posting file and general ledger.

| Control | Funded assets | Undrawn commitments and guarantees |
|---|---|---|
| Population completeness | Gross carrying amount ties to sub-ledger | Limits and contingent exposures tie to commitment/contingent ledgers |
| ECL output | Allowance by account or portfolio | Provision by commitment or contingent exposure |
| Balance-sheet presentation | Loss allowance against the financial asset | Liability provision; not netted against an asset that does not exist |
| P&L movement | Impairment/provision expense or gain | Impairment/provision expense or gain |
| Floor basis | Product and stage on funded exposure | Corresponding product floor after applicable CCF |
| Ledger reconciliation | Gross asset, allowance and net carrying amount | Commitment exposure, liability provision and contingent memorandum records |

A basic funded posting is debit impairment expense and credit loss allowance. For an undrawn commitment or financial guarantee, the credit is to a liability provision. The ECL is not netted against a loan asset because the undrawn exposure has not yet produced that asset.

Completeness testing must also catch facilities that exist in the commitments system but not the loan system. Off-balance-sheet omission is a population-control failure, not a modelling issue.

## 42. Opening-to-closing ECL must be attributable to identifiable economic movements

The audit committee needs a walk, not merely a closing number.

```text
Closing allowance =
Opening allowance
+ new business
- repayment and derecognition releases
+ stage-migration effect
+ parameter remeasurement
+ scenario remeasurement
+ overlay movement
- allowance removed on write-off
```

Opening allowance  
Recognised ECL provision at the start of the period.

Stage-migration effect  
Change caused by moving between 12-month and lifetime treatment or into credit impairment.

Parameter remeasurement  
Change from PD, LGD, EAD and recovery assumptions.

Scenario remeasurement  
Change from macro paths and scenario weights.

Worked: opening allowance is ₹120 crore. New business adds ₹18 crore. Repayments and derecognition release ₹12 crore. Stage migration adds ₹35 crore. Parameter remeasurement adds ₹14 crore. Scenario remeasurement adds ₹9 crore. Overlays add ₹6 crore. Write-offs remove ₹20 crore of allowance. Closing allowance is ₹170 crore.

| Driver | Movement | Running balance |
|---|---:|---:|
| Opening |  | ₹120 crore |
| New business | +₹18 crore | ₹138 crore |
| Repayment and derecognition | -₹12 crore | ₹126 crore |
| Stage migration | +₹35 crore | ₹161 crore |
| PD/LGD/EAD remeasurement | +₹14 crore | ₹175 crore |
| Macro scenarios and weights | +₹9 crore | ₹184 crore |
| Overlay movement | +₹6 crore | ₹190 crore |
| Write-offs | -₹20 crore | ₹170 crore |

### Key insight: a closing allowance without movement attribution is not an explainable allowance

The movement walk distinguishes portfolio growth from deterioration. It also separates stage migration from parameter changes. That distinction matters because a sudden increase can be a horizon effect even before loss severity changes.

## 43. Stage 2 creates a measurement-horizon cliff even when economics deteriorate smoothly

SICR changes the measurement horizon from 12-month ECL to lifetime ECL. The allowance can therefore jump on a small change in risk around the staging boundary.

A corporate exposure subject to the prudential floor illustrates the effect. The Stage 1 floor is 0.40%. The Stage 2 floor is 5%. If the model remains below both floors, the minimum provision on the same exposure becomes 12.5 times larger when it moves into Stage 2. The economics need not have become 12.5 times worse overnight. The measurement horizon and regulatory minimum changed.

```text
Gradual deterioration in borrower risk
→
SICR boundary crossed
→
12-month horizon becomes lifetime horizon
→
Allowance can jump
```

Banks manage this through better SICR design, early-warning information, stable staging governance and forecasting. They do not manage it by suppressing migration.

Quarter-to-quarter analysis should split exposures close to the SICR boundary, new migrations, cures and model changes. A high Stage 2 flow is not automatically a model failure. An unexplained oscillation between Stage 1 and Stage 2 is.

### Mental model: Stage 2 is a horizon cliff, not necessarily an economic cliff

The underlying risk can move smoothly while the required measurement horizon changes discretely.

## 44. Sensitivity analysis separates model dependence from the reported base case

Scenario-weighted ECL is sensitive to macro paths and weights. A governed sensitivity shows how much of the reported allowance depends on those choices.

Assume a portfolio has scenario ECL of ₹100 crore in base, ₹200 crore in downside and ₹60 crore in upside.

| Weight set | Base | Downside | Upside | Resulting ECL |
|---|---:|---:|---:|---:|
| Reported base case | 60% | 25% | 15% | ₹119 crore |
| Downside-heavy | 40% | 45% | 15% | ₹139 crore |
| Benign-weight shift | 70% | 15% | 15% | ₹109 crore |

The reported-base calculation is ₹60 crore + ₹50 crore + ₹9 crore = ₹119 crore. The downside-heavy result is ₹40 crore + ₹90 crore + ₹9 crore = ₹139 crore.

A useful sensitivity changes one governed dimension at a time where possible: scenario weights, GDP path, unemployment path, property-price path or mean-reversion timing. A bundle of simultaneous unexplained changes cannot identify what drives the result.

Disclosure needs enough information for users to understand methods, assumptions, forward-looking information and material changes. Sensitivity becomes particularly informative where non-linearity makes a simple average macro forecast misleading.

## 45. ECL model governance controls the model from inventory to retirement

Every model in the ECL chain belongs in a model inventory. The inventory covers staging models, PD, LGD, EAD, macro satellite models, scenario engines, overlay calculators and material upstream models whose output drives ECL.

```text
Inventory
→
Risk-based tiering
→
Development
→
Pre-implementation validation
→
Approval and implementation
→
Use and monitoring
→
Independent validation
→
Recalibration or redevelopment
→
Retirement
```

Documentation identifies model owner, developer, user, intended use, dependencies, data, assumptions, limitations, validation status and version. Tiering determines the intensity of review. A material retail lifetime-PD model and a small expert-rule model do not require identical testing, but both require governance proportionate to risk.

Change control is part of the model, not administration around it. A calibration update, new macro variable, segmentation change or implementation-code change can alter allowance. The effect is quantified before release and independently challenged where policy requires.

Third-party models remain the bank’s responsibility. Vendor branding does not transfer regulatory accountability.

## 46. Independent validation tests design, implementation, performance and use

Backtesting is one validation tool. Validation is broader.

| Validation layer | Challenge |
|---|---|
| Purpose and scope | Does the model answer the ECL question it claims to answer? |
| Data | Are sources complete, accurate, representative and controlled? |
| Methodology | Are equations, assumptions and calibration conceptually sound? |
| Staging | Does lifetime ECL begin and end at the correct point? |
| PD | Are discrimination, calibration and lifetime curves credible? |
| LGD | Do recovery amount, timing and costs match realised outcomes? |
| EAD | Do utilisation and drawdown assumptions match behaviour? |
| Macro model | Are signs, sensitivities, scenarios and reversion defensible? |
| Implementation | Does production code reproduce the approved methodology? |
| Overlay | Is residual risk real, quantified and non-duplicative? |
| Use | Is output used within its approved purpose and limitations? |
| Monitoring | Are breaches identified and acted upon? |

Models require validation before implementation and post-implementation backtesting. Recalibration triggers are explicit. Monitoring frequency follows complexity and materiality.

### Permanent trap: Validation bypass — a material model change reaches production before independent challenge is complete

A later validation report cannot turn an uncontrolled release into a controlled one. Emergency changes require an approved exception process, bounded use and a defined route to full validation.

## 47. The transition programme must make the 1 April 2027 opening balance defensible

Implementation is a bank-wide programme because the opening number depends on policy, history, systems, models, controls, accounting and capital at the same time.

| Workstream | Required output before commencement |
|---|---|
| Regulatory interpretation | Approved policy for scope, staging, floors, income and transition |
| Data | Reconstructed history, lineage, quality controls and gap treatment |
| Segmentation | Approved pools and stability tests |
| Models | PD, LGD, EAD, macro, EIR and ECL engine |
| Technology | Production pipeline, versioning, rerun controls and audit trail |
| Finance | Accounting policy, ledger map, transition bridge and disclosures |
| Risk | SICR policy, model governance, overlay policy and challenge |
| Validation | Independent pre-implementation opinions and remediation |
| Capital | CET1 transition calculations and fully loaded impact |
| Reporting | ECL regulatory templates and parallel-reporting capability |
| Audit | Control evidence and opening-balance support |

The sequence matters. A model cannot be validated before its data and implementation are stable. A general-ledger build cannot finish before the accounting objects are defined. A parallel run is meaningful only when inputs, staging, models and posting logic are close to production form.

The bank therefore progresses from interpretation to data reconstruction, model build, technology integration, dry runs, independent validation, defect closure, parallel production and opening-balance sign-off. The final Directions require first ECL reporting on the 30 June 2027 position and temporary parallel IRACP reporting after commencement. That makes transition evidence part of the operating architecture, not a one-day conversion exercise.

### Key insight: the opening ECL balance is the output of an implementation programme, not an accounting entry prepared on 1 April 2027

A defensible opening number is traceable back through source data, stage logic, calibrated parameters, floor application, transition adjustments, validation findings and approvals.

## 48. ECL feeds planning and capital processes without becoming their model

ECL is a financial-reporting and prudential provisioning measure. Other processes consume it but have different objectives.

| Downstream process | How ECL feeds it | Where alignment is required | Where it remains different |
|---|---|---|---|
| Provisioning budget | Expected allowance and P&L path | Portfolio growth, staging assumptions, macro paths | Budget can contain management plan actions not in point-in-time reported ECL |
| P&L forecast | Impairment charge and interest effects | Opening allowance, new business, migration, write-offs | Forecast horizon and business plan differ from reporting-date measurement |
| ICAAP | Capital consumption and risk outlook | Credit-risk drivers, scenarios, concentration | ICAAP covers broader capital adequacy and unexpected loss |
| Stress testing | Starting exposures and risk models | Default definitions, segmentation, scenario transmission, recoveries | Stress scenarios are deliberately severe rather than probability-weighted reporting outcomes |
| Pricing and portfolio management | Cost of expected credit loss | Risk differentiation and expected recovery | Commercial pricing includes funding, capital and margin beyond ECL |

The ECL model and stress-testing model must not contradict each other on basic mechanics. A recession cannot raise PD in ECL and reduce it in stress testing without a documented reason. EAD and recovery behaviour should also reconcile conceptually.

The outputs need not be numerically identical. Probability-weighted accounting ECL and a severe stress loss answer different questions.

## 49. Disclosure must explain the closing allowance, its drivers and its uncertainty

Disclosure is the last control on an opaque model stack. It forces the bank to explain how credit risk became a reported allowance.

The final Directions require explanation of SICR determination, credit-impairment definitions, collective grouping, write-off policy, ECL methods, assumptions and forward-looking information. Quantitative disclosure includes an opening-to-closing loss-allowance reconciliation by class of financial instrument and by relevant ECL category.

A complete disclosure pack makes these matters visible:

| Disclosure object | What it must make understandable |
|---|---|
| Stage balances | Where credit risk sits |
| Allowance reconciliation | Why the provision changed |
| SICR and impairment policy | Why exposures migrated |
| Macro assumptions | How forward-looking information entered |
| Overlays and estimation changes | Where judgement sits |
| Concentrations | Where losses can cluster |
| Write-offs | What left the carrying amount and allowance |
| Sensitivities | How material assumptions affect ECL |
| Transition capital disclosure | Effect of using the CET1 transitional arrangement |

First ECL reporting is based on the financial position at 30 June 2027. Required previous-year comparative presentation begins from the prescribed later reporting date. Quarterly unaudited reporting under the existing IRACP framework continues in parallel for the temporary period specified by the Directions.

Disclosure does not validate the model. It makes the model’s consequences observable. Unexplained stage migration, overlays or macro changes remain governance failures even when the reconciliation adds correctly.

## What to retain

- RBI’s final bank ECL regime commences on 1 April 2027; IRACP governs covered bank books until then.
- RBI ECL is not Ind AS 109. Prudential floors, regulatory parameter backstops, retained NPA rules and the CET1 transition change the answer.
- SICR is deterioration from initial recognition. DPD is a backstop, not the staging model.
- Twelve-month ECL limits the default-event window, not the lifetime consequence of an included default.
- Lifetime ECL needs a term structure. Cumulative, marginal, conditional and survival probabilities are different quantities.
- PD, LGD and EAD must be converted from regulatory-capital forms before reuse where their calibration objective differs.
- RBI Stage 3 and POCI interest income is cash-basis under the final Directions; Ind AS 109 net-interest mechanics do not transfer unchanged.
- Modelled ECL is compared with RBI prudential floors. The higher regulatory amount governs.
- The opening 2027 provision affects retained earnings; the optional CET1 mechanism phases capital recognition, not ECL recognition.
- A production ECL number is a close process with frozen data, controlled models, ledger reconciliation, movement attribution and surviving evidence.
- Stage 2 can create a horizon cliff. Volatility must be explained, not suppressed.
- Independent validation, model monitoring and disclosure are part of the ECL mechanism, not after-the-fact assurance.

## Sources

- Reserve Bank of India, *Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026*, RBI/DOR/2026-27/398; DOR.STR.REC.No.6/21.06.011/2026-27, 27 April 2026.
- Reserve Bank of India, *Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025*, 28 November 2025.
- Reserve Bank of India, *Reserve Bank of India (Commercial Banks – Resolution of Stressed Assets) Directions, 2025*, 28 November 2025.
- Reserve Bank of India, *Reserve Bank of India (Commercial Banks – Classification, Valuation and Operation of Investment Portfolio) Directions, 2025*, 28 November 2025.
- Reserve Bank of India, *Reserve Bank of India (Commercial Banks – Capital Charge for Credit Risk – Standardised Approach) Directions, 2026*, 27 April 2026.
- Reserve Bank of India, *Implementation of Indian Accounting Standards*, 13 March 2020.
- Ministry of Corporate Affairs, *Indian Accounting Standard (Ind AS) 109, Financial Instruments*, notified under the Companies (Indian Accounting Standards) Rules, 2015, 16 February 2015.
- Basel Committee on Banking Supervision, *Guidance on credit risk and accounting for expected credit losses*, December 2015.

## Verification log

2026-09-02 — Section 35 worked example arithmetic was corrected so the ₹6.20 lakh scenario-weighted modelled ECL is stated before the ₹0.800 lakh overlay, producing ₹7.00 lakh pre-floor and closing allowance. The Stage 2 floor remains ₹4.60 lakh. The movement attribution was rebuilt to tie from ₹0.400 lakh opening allowance to ₹7.000 lakh closing allowance. Other worked arithmetic in the document was recomputed for internal consistency. Independent verification is outstanding.

2026-09-02 — Sections 1–49 were drafted using the named primary instruments and the old source pack for modelling mechanism only. The Indian regulatory position was rebuilt from the final Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026 rather than carried forward from the old source pack. Independent verification is outstanding.

2026-09-02 — Section 32 high-risk consolidated thresholds table: commencement dates, SICR and NPA day counts, collateral valuation threshold and frequencies, Stage 1 and Stage 2 floors, Stage 3 ageing floors, regulatory PD and LGD backstops, EIR migration date, reporting dates and CET1 glide fractions were sourced during drafting from the Reserve Bank of India (Commercial Banks – Asset Classification, Provisioning and Income Recognition) Directions, 2026. Independent verification is outstanding. The revolving SICR wording of “up to 60 days” is reproduced from the instrument; its operational interpretation requires independent verification.

2026-09-02 — Sections 27–29 income recognition and POCI: the final 2026 Directions were used during drafting. They require cash-basis income recognition for POCI and financial assets that subsequently become credit-impaired. This differs from the older draft/source-pack account of Stage 3 net-carrying-amount interest. Section 28’s P&L treatment of the analytical discount-unwind component is an implementation interpretation and requires independent verification.

2026-09-02 — Section 1 and Sources: the Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025 is cited without a reference number because that identifier was not confirmed against that instrument in the bounded drafting pass. Independent verification is outstanding.

2026-09-02 — Section 2 NBFC/HFC Ind AS perimeter: the 13 March 2020 RBI Ind AS implementation instrument is cited without a circular/reference number because that number was not independently confirmed in the bounded drafting pass. Independent verification of the perimeter wording and instrument identifier is outstanding.

2026-09-02 — Sections 10 and 47 rely on the Reserve Bank of India (Commercial Banks – Resolution of Stressed Assets) Directions, 2025 for the existence of separate restructuring and cure requirements. Its reference number was omitted because it was not independently confirmed in the bounded drafting pass. Independent verification is outstanding.

2026-09-02 — Sections 38 and 49 rely on the Reserve Bank of India (Commercial Banks – Classification, Valuation and Operation of Investment Portfolio) Directions, 2025 for investment accounting outside the specific ECL rules. Its reference number was omitted because it was not independently confirmed in the bounded drafting pass. Independent verification is outstanding.

2026-09-02 — Sections 23, 32, 34 and 41 use the 2026 capital-standardised-approach regime for CCF and eligible collateral context. Its reference number was omitted from Sources because it was not independently confirmed against that instrument during the bounded pass. Independent verification is outstanding.

2026-09-02 — Sections 18, 21, 22, 24, 25, 45 and 46 use Ind AS 109 and Basel expected-loss concepts as comparison or implementation baselines. Reference identifiers not confirmed in the bounded drafting pass were omitted from Sources. Independent verification of those source particulars is outstanding.

2026-09-02 — Sections 15–25, 30, 39–48 contain implementation methods, illustrative modelling assumptions, bank-designed controls and worked numbers that are not regulatory minima unless explicitly identified as such. They require independent model, accounting and audit validation before operational use.
