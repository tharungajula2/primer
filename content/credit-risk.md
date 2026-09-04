---
title: Credit Risk
description: Reference cheatsheet — exposure, classification, provisioning, ECL, Basel capital and recovery for Indian lenders.
order: 20
collection: finance
format: md
series: masterclass
verified: unverified
---

Indian lens: RBI IRAC norms, Basel III as adopted by RBI, Ind AS 109, SARFAESI and IBC.

```
BORROWER  →  FACILITY  →  EXPOSURE  →  MONITORING  →  DPD LADDER
→  CLASSIFICATION  →  PROVISION (IRAC)  →  ECL (Ind AS)
→  RWA  →  CAPITAL  →  DEFAULT  →  RECOVERY
```

**Permanent rule — credit risk is asymmetric. Upside is a capped spread; downside is the full principal.**

---

## 1. The loss equation

```
Expected Loss = PD x LGD x EAD

PD    probability of default over the horizon
LGD   loss given default, fraction of EAD not recovered
EAD   exposure at default, currency

Worked
PD    3%
LGD   45%
EAD   ₹2,00,00,000

3% x 45% x 2,00,00,000 = ₹2,70,000
```

| Component | Driven by | Managed at | Changed by |
|---|---|---|---|
| PD | Borrower cash flow, behaviour | Underwriting | Better selection, monitoring |
| LGD | Security, charge rank, enforceability | Documentation | Collateral, perfection, seniority |
| EAD | Facility type, undrawn limit | Structuring | Limit control, CCF, cancellation |

**Never confuse default and loss.** Default with full workout recovery is a high PD event with near-zero loss. Settlement without technical default is a zero PD event with high loss. They move independently.

## 2. Borrower object model

| Object | Answers | Level |
|---|---|---|
| Customer | Do we know this person or entity | Identity |
| Borrower / obligor | Who owes and who is sued | Legal |
| Group / connected counterparty | Total bet on one source of cash | Aggregation |
| Account | Is this overdue today | Operational |
| Facility | What was sanctioned, what may be drawn | Contractual |

Risk aggregates upward to group. Obligation attaches downward to one legal person.

## 3. Exposure quantities

| Quantity | Definition | Used for |
|---|---|---|
| Sanctioned limit | Approved ceiling | Governance, limit monitoring |
| Drawing power | Limit permitted this month after margins | Operational drawing control |
| Outstanding | Owed today | Accounting, DPD |
| Undrawn commitment | Limit less outstanding | CCF, potential exposure |
| Contingent | Guarantees, LCs, acceptances | Off balance sheet |
| EAD | Drawn plus undrawn times CCF | Capital, EL |

```
EAD = Drawn + (Undrawn x CCF)

Worked
Drawn      ₹3,10,00,000
Undrawn      ₹90,00,000
CCF                 20%

3,10,00,000 + (90,00,000 x 20%) = ₹3,28,00,000
```

Empirical EAD at default approaches the full limit. The regulatory CCF is a capital floor, not a forecast.

## 4. Segment machinery

| | Retail | MSME | Corporate |
|---|---|---|---|
| Unit of analysis | Person | Business | Credit |
| Decision | Rules engine, scorecard | Analyst plus unit visit | Committee plus external rating |
| Turnaround | 1-3 days | 3-6 weeks | 2-4 months |
| Primary evidence | Bureau, salary credits, ITR | GST returns, bank statements, stock statement | Audited accounts, rating, sector view |
| Core test | Affordability — FOIR, LTV | Cash cycle viability | Debt service through the cycle |
| Security norm | Asset financed | Current assets, collateral, personal guarantee | Consortium package, covenants |
| Loss pattern | Frequent, small, forecastable | Lumpy, idiosyncratic | Rare, large, correlated |
| Modelling | Statistical, pooled | Hybrid | Judgemental, name by name |

## 5. Credit information companies

Four CICs registered under CICRA 2005: TransUnion CIBIL, Experian, Equifax, CRIF High Mark. Reporting to all four is mandatory, so tradeline content is substantially identical. Multiple pulls catch reporting gaps, not different data.

| Report carries | Report does not carry |
|---|---|
| Every reported credit account | Income |
| Month-by-month DPD string per account | Unreported borrowing — chit funds, moneylenders, family |
| Limits, balances, utilisation | Business cash flow |
| Enquiry count and enquirer type | Intent |
| Written-off and settled flags | Wilful defaulter status, held separately |

**Trap — enquiry count is ignored.** Four enquiries in six months means three declines or loan stacking. Visible before any delinquency.

## 6. Cash versus profit

```
Cash generated = PAT + Depreciation − ΔDebtors − ΔStock + ΔCreditors

Worked
PAT              ₹96,00,000
Depreciation     ₹22,00,000
ΔDebtors        +₹70,00,000
ΔStock          +₹40,00,000
ΔCreditors      +₹25,00,000

96 + 22 − 70 − 40 + 25 = ₹33,00,000
```

Working capital cycle:

```
Raw material purchase
→  Inventory held            65 days
→  Sale
→  Debtor collection         90 days
→  less supplier credit      45 days
=  Net operating cycle      110 days, funded by the lender
```

Growth in a working capital business consumes cash. Faster growth consumes it faster.

## 7. Ratios — what each answers and when it misleads

| Ratio | Formula | Question | Comfort | Misleads when |
|---|---|---|---|---|
| Debt / equity | Total debt / net worth | How geared | Under 2.0 | Net worth inflated by revaluation |
| Debt / EBITDA | Total debt / EBITDA | Years to repay | Under 3.5 | EBITDA carries one-off income |
| Interest coverage | EBITDA / interest | Can it pay interest | Above 2.0 | Interest capitalised, not expensed |
| DSCR | Cash available / (interest + principal due) | Can it service debt | Above 1.25 | Principal understated by refinancing |
| Current ratio | Current assets / current liabilities | Short-term solvency | Above 1.33 | Stock unsaleable, debtors uncollectable |
| Quick ratio | (CA − stock) / CL | Solvency without selling stock | Above 1.0 | Debtors stale |
| Inventory days | Stock / COGS x 365 | Cycle length | Sector-specific | Stock overstated |
| Debtor days | Debtors / sales x 365 | Collection quality | Sector-specific | Ageing hidden in the gross figure |

```
DSCR = EBITDA / (Interest + Principal due)

Worked
EBITDA              ₹135 cr
Interest             ₹38 cr
Principal due        ₹55 cr

135 / (38 + 55) = 1.45
```

Leverage describes the position. Coverage predicts the default.

## 8. Facility families

| Family | Repayment mechanic | Failure mode | EAD behaviour |
|---|---|---|---|
| Amortising term | Scheduled principal and interest | Income or cash flow shock | Falls with age |
| Bullet / demand | Single repayment at maturity | Refinancing unavailable on the day | Full principal throughout |
| Revolving — CC, OD | Renewed, rarely repaid | Cycle stops, limit fully drawn | Near full limit |
| Bill discounting | Self-liquidating on bill maturity | Drawee does not honour | Bill value |
| Project finance | Sculpted to project cash flow | Completion or offtake failure | Draws then amortises |
| Contingent — BG, LC | Nothing paid unless invoked | Invocation converts it to a funded loan | Zero until 100% |
| Guarantee-backed | Third party pays on default | Guarantor unenforceable | Full, less guarantee |

## 9. Drawing power

```
DP = (Paid stock x (1 − stock margin)) + (Eligible debtors x (1 − debtor margin))

Paid stock        stock less creditors
Eligible debtors  debtors within the ageing cut-off, commonly 90 days

Worked
Stock                     ₹5,20,00,000
less creditors            ₹2,40,00,000
Paid stock                ₹2,80,00,000
less 25% margin             ₹70,00,000
Eligible on stock         ₹2,10,00,000

Debtors under 90 days     ₹3,10,00,000
less 40% margin           ₹1,24,00,000
Eligible on debtors       ₹1,86,00,000

Drawing power             ₹3,96,00,000
Sanctioned limit          ₹4,00,00,000
Permitted drawing         ₹3,96,00,000    lower of DP and limit
```

**Trap — the stock statement is self-reported.** Overstated stock and aged debtors shown as current are the primary vector of MSME fraud. Late or round-figure submission is itself a signal.

## 10. Security types

| Type | Example | Behaviour on default | LGD effect |
|---|---|---|---|
| Immovable, residential | Self-occupied property | Retains value, slow to enforce | Strong |
| Immovable, industrial | Factory land and building | Distress discount, illiquid | Moderate |
| Plant and machinery | Specialised equipment | Heavy discount, buyer-specific | Weak to moderate |
| Current assets | Stock, book debts | Evaporates as the business closes | Weak |
| Financial | Fixed deposit, securities, gold | Realisable immediately | Strongest |
| Personal guarantee | Promoter | Only as good as assets held in own name | Variable to nil |
| Corporate guarantee | Group company | Correlated with the borrower | Weak |

Security sets LGD, not PD.

## 11. Charge creation versus perfection

Creation is the agreement. Perfection is the registration that makes the charge good against third parties. An unperfected charge leaves the lender unsecured at enforcement.

| Security | Instrument | Registry | Timeline |
|---|---|---|---|
| Company assets | Hypothecation or mortgage deed | ROC, Companies Act 2013 | Generally 30 days from creation |
| Immovable property | Mortgage | CERSAI | On creation |
| Equitable mortgage | Deposit of title deeds | CERSAI, memorandum of entry | On deposit |
| Movable assets | Hypothecation | ROC where the borrower is a company | 30 days |
| Financial assets | Pledge, lien marking | Depository or issuer | On marking |

Adjacent failures with the same effect: stale valuation, unregistered modification of charge, guarantee from a guarantor holding nothing in his own name.

## 12. Charge ranking

| Position | Claim | Recovery in a shortfall |
|---|---|---|
| First charge, exclusive | Senior, sole | Full realisation up to dues |
| First charge, pari passu | Senior, shared rateably | Proportionate share |
| Second charge | Residual after first charge dues | Usually nil |
| Unsecured | No charge | Pro rata with trade creditors |
| Subordinated | Contractually junior | Last |

```
Realisation                         ₹120 cr
First charge dues, pari passu       ₹150 cr
Our share of first charge            ₹55 cr

Recovery = 120 x (55 / 150) = ₹44 cr         LGD 20%

Same realisation, second charge behind ₹150 cr:
Recovery = ₹0                                LGD 100%
```

**Never confuse security value and security position.** Asset cover is meaningless without rank.

## 13. Covenants

| Type | Example | Purpose |
|---|---|---|
| Financial | DSCR above 1.25, debt/EBITDA under 3.5 | Trigger for renegotiation before default |
| Information | Quarterly financials within 45 days, monthly stock statement | Makes financial covenants testable in time |
| Affirmative | Maintain insurance, maintain security cover ratio | Preserve LGD |
| Negative | No further borrowing, no asset disposal, dividend cap | Prevent value leakage |
| Cross-default | Default with any lender triggers default here | Prevents selective servicing |

A covenant recovers nothing. Its value is the defined moment at which the lender may act.

**Trap — serial waiver.** Four consecutive quarterly waivers reprice the covenant to zero. Every large restructuring has a run of waivers in front of it.

## 14. Early warning signals

| Signal | Segment | Indicates |
|---|---|---|
| Salary credit stops or halves | Retail | Income loss, weeks before the first missed EMI |
| CC utilisation above 95% continuously | MSME, corporate | Limit funding losses, not the cycle |
| Cheque returns, any size | All | Liquidity stress |
| Credits into the account falling | MSME | Turnover falling or routed elsewhere |
| Stock statement late or in round figures | MSME | Statement being constructed |
| GST returns filed late | MSME | Administrative or cash breakdown |
| New borrowing appearing on bureau | All | Stacking, refinancing pressure |
| Promoter share pledge rising | Corporate | Promoter liquidity stress |
| Auditor resignation, delayed results | Corporate | Accounting problem |
| Rating downgrade or outlook change | Corporate | External confirmation, usually late |

Behaviour deteriorates before financials. Financials deteriorate before payments.

## 15. DPD ladder and SMA

```
Due date missed
→  Overdue           day 1
→  SMA-0             1-30 DPD
→  SMA-1             31-60 DPD
→  SMA-2             61-90 DPD
→  NPA               above 90 DPD
```

| Rule | Position |
|---|---|
| DPD counting | Continuous, at day end |
| Reset | Only on clearance of the entire arrears |
| Part payment | Does not reset the clock |
| CC and OD trigger | Out of order continuously beyond 90 days — outstanding above DP, or credits insufficient to cover interest |
| Bills purchased or discounted | Overdue beyond 90 days |
| Upgradation to standard | Only on repayment of the entire arrears of interest and principal |

**Trap — month-end top-up.** Funds deposited before the reporting date and withdrawn after it reset the clock without the account being serviced from business cash.

## 16. NPA classification

| Class | Condition | Period |
|---|---|---|
| Standard | Not NPA, no arrears beyond 90 days | — |
| Sub-standard | NPA | First 12 months as NPA |
| Doubtful 1 | Remained sub-standard | Up to 1 year in doubtful |
| Doubtful 2 | Remained doubtful | 1 to 3 years in doubtful |
| Doubtful 3 | Remained doubtful | Above 3 years |
| Loss | Loss identified by bank, auditor or inspection, not yet written off | Any |

Classification is borrower-wise, not facility-wise. All facilities of a borrower classify together.

## 17. IRAC provisioning rates

| Asset class | Portion | Rate |
|---|---|---|
| Standard, general | — | 0.40% |
| Standard, direct agriculture and SME | — | 0.25% |
| Standard, commercial real estate | — | 1.00% |
| Standard, CRE residential housing | — | 0.75% |
| Sub-standard | Secured | 15% |
| Sub-standard | Unsecured ab initio | 25% |
| Doubtful 1 | Secured | 25% |
| Doubtful 2 | Secured | 40% |
| Doubtful 3 | Secured | 100% |
| Doubtful, any age | Unsecured | 100% |
| Loss | Entire | 100% |

```
Provision on classification

Outstanding, secured         ₹3,10,00,000
Sub-standard rate                     15%

3,10,00,000 x 15% = ₹46,50,000 in the quarter of classification
```

Rates require verification against the current Master Circular.

## 18. Income recognition on NPA

| Rule | Effect |
|---|---|
| Interest accrual | Not recognised in P&L unless actually realised |
| Unrealised interest credited in earlier periods | Reversed |
| Fees, commission and similar income | Same treatment |
| Recovery appropriation | Per bank policy, consistently applied, or per court order |
| Partly recovered accounts | Income only to the extent realised |

Classification does three things at once: classifies, provides, and stops income — including returning income already booked.

## 19. Restructuring versus evergreening

| | Restructuring | Evergreening |
|---|---|---|
| What changes | Tenor, instalment, rate, moratorium | Nothing; a new limit funds old interest |
| Viability | Assessed and documented | Not assessed |
| Classification | Downgraded or flagged per the resolution framework | Kept standard |
| Provision | Recognised | Avoided |
| Exposure | Stable or reduced | Grows |
| Tell | Documented plan, promoter contribution | Fresh disbursement roughly equals interest due |

Resolution of stressed assets runs under the RBI Prudential Framework: review period on default, inter-creditor agreement, implementation timelines, additional provisioning where the plan is not implemented in time. Verify current timelines.

## 20. Expected credit loss — Ind AS 109

ECL provides for losses expected in the future. IRAC provides for deterioration that has already occurred. Both run, and they answer different questions.

| | Stage 1 | Stage 2 | Stage 3 |
|---|---|---|---|
| Trigger | Origination, no significant increase in credit risk | Significant increase in credit risk since origination | Credit-impaired, default |
| Loss allowance | 12-month ECL | Lifetime ECL | Lifetime ECL |
| Interest recognised on | Gross carrying amount | Gross carrying amount | Net carrying amount |
| DPD anchor | 0-30 | 30-90 | Above 90 |

```
ECL = Σ  PD x LGD x EAD x Discount factor,  over the measurement horizon

12-month ECL     PD over the next 12 months only
Lifetime ECL     PD over the remaining life of the instrument

Worked, 12-month
PD 12m            2.0%
LGD                40%
EAD       ₹1,00,00,000
Discount factor   0.96

2.0% x 40% x 1,00,00,000 x 0.96 = ₹76,800
```

| Concept | Position |
|---|---|
| SICR | Rebuttable presumption of significant increase at 30 DPD |
| Default | Rebuttable presumption at 90 DPD |
| Forward-looking input | Macroeconomic scenarios, probability-weighted |
| Stage movement | Symmetric — accounts move back on improvement |
| POCI | Purchased or originated credit-impaired, always lifetime ECL |

| | IRAC | ECL |
|---|---|---|
| Basis | Rule, ageing-driven | Model, expectation-driven |
| Direction | Backward-looking | Forward-looking |
| Standard asset | Flat general provision | Computed 12-month ECL |
| Judgement | Minimal | Substantial — staging, scenarios, LGD |
| Set by | RBI | The entity, audited |

Applicability: NBFCs and HFCs in India report under Ind AS. RBI has deferred Ind AS implementation for banks; banks continue on IRAC. Confirm the current position.

**Never confuse provision and loss.** Provision is an estimate charged today under a framework. Loss is the final unrecovered amount, years later.

## 21. Basel — capital for credit risk

Three pillars: minimum capital requirements, supervisory review through ICAAP and SREP, market discipline through disclosure.

```
RWA  = EAD x Risk weight

CRAR = Eligible capital / (Credit RWA + Market RWA + Operational RWA)
```

| Approach | PD | LGD | EAD | Risk weight set by |
|---|---|---|---|---|
| Standardised | Not used | Not used | Regulatory CCF | Regulator, by external rating |
| Foundation IRB | Bank estimate | Regulatory | Regulatory | Supervisory formula |
| Advanced IRB | Bank estimate | Bank estimate | Bank estimate | Supervisory formula, bank inputs |

Indian banks operate the standardised approach for credit risk. IRB requires prior RBI approval.

| Exposure | Risk weight |
|---|---|
| Central and State Government | 0% |
| Corporate, AAA | 20% |
| Corporate, AA | 30% |
| Corporate, A | 50% |
| Corporate, BBB | 100% |
| Corporate, BB and below | 150% |
| Corporate, unrated | 100%, higher above specified exposure thresholds |
| Regulatory retail | 75% |
| Housing, by LTV band | 35% to 75% |
| Commercial real estate | 100% |
| CRE residential housing | 75% |
| Consumer credit, personal loans | 125% |
| Credit card receivables | 150% |
| NPA, unsecured portion, provision under 20% | 150% |
| NPA, unsecured portion, provision 20-50% | 100% |
| NPA, unsecured portion, provision above 50% | 50% |

| Ratio | Minimum |
|---|---|
| Common Equity Tier 1 | 5.5% |
| Tier 1 | 7.0% |
| Total CRAR | 9.0% |
| Capital conservation buffer | 2.5% of CET1 |
| CRAR including CCB | 11.5% |
| Countercyclical buffer | 0 to 2.5%, activated by RBI |
| D-SIB surcharge | Bucket-dependent additional CET1 |
| Leverage ratio | 4.0% for D-SIBs, 3.5% for others |

```
Capital consumed

Unrated corporate
EAD                ₹3,28,00,000
Risk weight                100%
RWA                ₹3,28,00,000
Capital at 11.5%     ₹37,72,000

Housing, LTV under 80%
Exposure             ₹35,00,000
Risk weight                 35%
RWA                  ₹12,25,000
Capital at 11.5%      ₹1,40,875
```

Credit risk mitigation reduces RWA through eligible financial collateral, on-balance-sheet netting, guarantees and credit derivatives, subject to haircuts and minimum documentation standards.

**Provisions cover expected loss. Capital covers unexpected loss.**

All risk weights and ratios require verification against the current Basel III Master Circular.

## 22. Concentration

| Limit | Basis |
|---|---|
| Single counterparty | Percentage of eligible Tier 1 capital |
| Group of connected counterparties | Higher percentage of eligible Tier 1 capital |
| Sector | Internal board-approved limit |
| Geography | Internal board-approved limit |
| Aggregate substantial exposures | Internal ceiling |

Large Exposures Framework thresholds are set by RBI and revised. Verify.

Retail defaults are near-independent and forecastable. Corporate defaults are correlated by sector and arrive together. Diversification is the only improvement in lending that costs nothing.

## 23. Recovery routes

| Route | Statute | Available to | Trigger | Mechanism | Practical duration |
|---|---|---|---|---|---|
| SARFAESI | SARFAESI Act 2002 | Secured creditors | Account classified NPA | 60-day demand notice under s.13(2), then possession and sale under s.13(4) | 1-2 years |
| DRT | RDDBFI Act 1993 | Banks and FIs | Debt above the pecuniary threshold | Original application, decree, recovery certificate | 3-5 years |
| IBC | IBC 2016 | Financial and operational creditors | Default above threshold | Moratorium, resolution professional, CoC vote on the plan, else liquidation | Statutory outer limit 330 days; realised longer |
| Compromise settlement | Board policy | All | Board-approved policy | Negotiated one-time settlement | Months |

SARFAESI is unavailable against agricultural land. IBC is resolution, not a recovery suit — control passes from the promoter on admission. Thresholds and timelines have been revised repeatedly; verify.

## 24. Named failure modes

| Failure | Mechanism | Detected at |
|---|---|---|
| Lending against the balance sheet | Profit taken as repayment capacity | Never, until the instalment is missed |
| Unperfected charge | Registration missed, lender unsecured | Enforcement, when it cannot be fixed |
| Stale limit | Revolving limit renewed unchanged while the business changed shape | Renewal review, if performed |
| Serial covenant waiver | Trigger repriced to zero | Restructuring, in hindsight |
| Group treated as separate borrowers | True exposure double the recorded limit | Default of the first entity |
| Month-end window dressing | Clock reset without servicing | Account statement, not the classification report |
| Evergreening | New limit funds old interest | Disbursement pattern matching interest due |

---

## Every number

All figures require verification against the current RBI Master Circulars.

| Item | Value | Section |
|---|---|---|
| SMA-0 / SMA-1 / SMA-2 | 1-30 / 31-60 / 61-90 DPD | 15 |
| NPA | Above 90 DPD | 15 |
| Sub-standard period | First 12 months as NPA | 16 |
| Doubtful 1 / 2 / 3 | Up to 1 yr / 1-3 yrs / above 3 yrs | 16 |
| Standard provision, general | 0.40% | 17 |
| Standard, agriculture and SME | 0.25% | 17 |
| Standard, CRE | 1.00% | 17 |
| Standard, CRE-RH | 0.75% | 17 |
| Sub-standard, secured / unsecured | 15% / 25% | 17 |
| Doubtful secured, D1 / D2 / D3 | 25% / 40% / 100% | 17 |
| Doubtful unsecured, and Loss | 100% | 17 |
| SICR presumption | 30 DPD, rebuttable | 20 |
| Default presumption, Ind AS | 90 DPD, rebuttable | 20 |
| CET1 / Tier 1 / CRAR | 5.5% / 7.0% / 9.0% | 21 |
| CCB, and CRAR with CCB | 2.5%, 11.5% | 21 |
| Leverage ratio | 4.0% D-SIB, 3.5% others | 21 |
| RW corporate, AAA / AA / A / BBB / BB and below | 20 / 30 / 50 / 100 / 150% | 21 |
| RW unrated corporate | 100% | 21 |
| RW regulatory retail | 75% | 21 |
| RW housing, by LTV | 35% to 75% | 21 |
| RW consumer credit / credit card | 125% / 150% | 21 |
| CCF on undrawn, illustrative | 20% | 3 |
| Stock margin / debtor margin, illustrative | 25% / 40% | 9 |
| Debtor ageing cut-off for DP | 90 days | 9 |
| ROC charge registration | Generally 30 days | 11 |
| SARFAESI demand notice | 60 days | 23 |
| IBC statutory outer limit | 330 days | 23 |

## Never-confuse board

```
Default              ≠  Loss
Provision            ≠  Loss
Sanctioned limit     ≠  Drawing power  ≠  Outstanding  ≠  EAD
Security value       ≠  Security position
Charge created       ≠  Charge perfected
Restructuring        ≠  Evergreening
IRAC provision       ≠  ECL allowance
Expected loss        ≠  Unexpected loss
Leverage             ≠  Coverage
Obligor exposure     ≠  Group exposure
Contingent exposure  ≠  Nil exposure
Borrower-wise class  ≠  Facility-wise class
```

## What must survive

Credit risk is asymmetric: capped upside, total downside.

EL = PD x LGD x EAD. PD is underwriting, LGD is documentation, EAD is structuring.

Risk aggregates upward to the group; obligation attaches downward to one legal person.

Undrawn limits are drawn precisely when the lender would least like it.

Coverage predicts default; leverage only describes the position.

Collateral sets LGD, not PD. An unperfected charge is not security. Rank decides recovery.

Behaviour deteriorates before financials; financials before payments.

DPD runs continuously and resets only on clearance of the entire arrears.

Classification classifies, provides, and stops income — including reversing income already booked.

IRAC provides for what has gone wrong; ECL provides for what is expected to go wrong.

Provisions cover expected loss; capital covers unexpected loss.

Diversification is the only free improvement in lending.

## Sources

Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances, Reserve Bank of India.

Master Circular on Basel III Capital Regulations, Reserve Bank of India.

Prudential Framework for Resolution of Stressed Assets, Reserve Bank of India.

Large Exposures Framework, Reserve Bank of India.

Ind AS 109, Financial Instruments.

Credit Information Companies (Regulation) Act, 2005.

Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002.

Recovery of Debts Due to Banks and Financial Institutions Act, 1993.

Insolvency and Bankruptcy Code, 2016.

Companies Act, 2013, registration of charges.

## Verification log

Nothing checked. First write.

Priority order, highest risk first:

1. Section 17 provisioning rates, in full.
2. Section 21 risk weights, capital ratios, leverage ratio.
3. Section 16 classification periods and section 15 upgradation condition.
4. Section 20 Ind AS 109 applicability to banks and the current RBI position.
5. Section 23 SARFAESI notice period, DRT threshold, IBC timelines.
6. Section 22 Large Exposures Framework limits.
