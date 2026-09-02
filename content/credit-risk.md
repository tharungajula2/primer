---
title: Credit Risk
description: End-to-end Indian bank credit risk from borrower and facility structure through deterioration, loss measurement, prudential classification, capital consequences and recovery.
order: 20
collection: finance
verified: unverified
---

Indian banking lens: RBI prudential framework + Ind AS 109 + Basel as adopted in India.

```text
BORROWER / OBLIGOR / GROUP
        ↓
LOAN / FACILITY / COMMITMENT
        ↓
PRIMARY REPAYMENT SOURCE
        ↓
UNDERWRITING
        ↓
FACILITY STRUCTURE
        ↓
COLLATERAL / GUARANTEE / CHARGE
        ↓
DRAWN + UNDRAWN + CONTINGENT EXPOSURE
        ↓
PERFORMING CREDIT
        ↓
BEHAVIOUR + FINANCIAL + COVENANT MONITORING
        ↓
DETERIORATION
        ↓
ARREARS / DPD / SMA / WATCHLIST
        ↓
RBI NPA / DEFAULT / CREDIT-IMPAIRED
        ↓
PD + LGD + EAD
        ↓
EXPECTED LOSS
        ↓
IND AS 109 BRIDGE + RBI / BASEL CAPITAL BRIDGE
        ↓
CONCENTRATION + LARGE EXPOSURES
        ↓
STRESS
        ↓
WORKOUT / RECOVERY / RESTRUCTURING
        ↓
WRITE-OFF / RESIDUAL LOSS
        ↓
ACTUAL EXPERIENCE
        ↓
RATING / MODEL / POLICY FEEDBACK
```

**Primary repayment source first; collateral second.**

## 1. Credit risk = non-payment + incomplete recovery

| Layer | Credit question | Loss channel |
|---|---|---|
| Borrower | Will obligations be met | Default likelihood |
| Facility | How much can be drawn | Exposure at failure |
| Security | What value survives | Recovery severity |
| Portfolio | What fails together | Concentration and correlation |
| Bank | What loss can be absorbed | Provision and capital consequence |

```text
Contractual obligation
→ payment expected
→ payment missed or borrower weakens
→ exposure crystallises
→ recovery sources tested
→ cash recovered
→ unrecovered amount
→ economic loss
```

```text
Will default happen?      → PD
How severe if it does?    → LGD
How much is exposed then? → EAD

Expected Loss = PD x LGD x EAD

PD    probability of default over the horizon
LGD   loss given default as fraction of exposure
EAD   exposure at default
```

### Never confuse

```text
Default ≠ Loss
Loss ≠ Exposure
Exposure ≠ Balance
Collateral ≠ Repayment capacity
Provision ≠ Capital
```

### Mental model

```text
Credit risk starts before arrears
Credit loss ends after recovery
Borrower risk drives PD
Facility structure drives EAD
Recovery structure drives LGD
```

## 2. Retail, MSME and corporate credit use different risk units

| Dimension | Retail | MSME | Corporate |
|---|---|---|---|
| Primary risk unit | Customer + account | Business + proprietor / promoter + facility | Obligor + group + facility |
| Typical decisioning | Score + policy | Hybrid score + analyst | Internal rating + analyst + authority |
| Primary repayment source | Household income | Business cash generation | Enterprise cash flow |
| Core external data | CIC report + income evidence | CIC + GST / banking + financials | Financials + industry + market data |
| Main structural risk | Product mechanics | Working-capital cycle + owner dependence | Group structure + leverage + refinancing |
| Monitoring centre | Behaviour | Conduct + turnover + financials | Financials + covenants + liquidity |
| Workout mode | Collections | Collections + restructuring | Workout + restructuring + enforcement |

```text
Retail
→ high volume
→ standardised products
→ behavioural signals

MSME
→ cash conversion
→ promoter dependence
→ working-capital discipline

Corporate
→ enterprise cash flow
→ capital structure
→ group and refinancing risk
```

### Mental model

```text
Same risk dimensions
→ PD + LGD + EAD

Different evidence
→ segment-specific underwriting
```

## 3. Customer, borrower, obligor, group, account and facility are different objects

| Object | Meaning | Main credit use | Typical grain |
|---|---|---|---|
| Customer | Relationship party | Service and relationship view | Person / entity |
| Borrower | Party receiving credit | Contract and repayment | Person / entity |
| Co-borrower | Joint contractual debtor | Joint repayment liability | Person / entity |
| Obligor | Legal entity owing performance | Default and PD | Legal entity |
| Connected obligor | Economically linked debtor | Dependency and contagion | Linked entity |
| Group | Connected economic entities | Concentration and support | Economic group |
| Product | Lending archetype | Mechanics | Product class |
| Account | Booking record | Balance and conduct | Account |
| Facility | Contractual credit line | Terms and limits | Facility |
| Exposure | Amount economically at risk | Loss and capital | Exposure |
| Guarantor | Party promising payment support | Recovery and CRM | Support provider |
| Collateral provider | Party providing secured asset | Security enforceability | Asset owner |

```text
CUSTOMER
   ↓
BORROWER / OBLIGOR
   ↓
GROUP
   ↓
PRODUCT
   ↓
FACILITY
   ↓
ACCOUNT
   ↓
EXPOSURE
```

### Never confuse

```text
Customer ≠ Borrower
Borrower ≠ Obligor
Obligor ≠ Group
Product ≠ Facility
Facility ≠ Account
Facility ≠ Exposure
Guarantor ≠ Borrower
```

## 4. Balance, exposure and commitment are different quantities

| Quantity | Contains | Excludes / caveat | Main use |
|---|---|---|---|
| Sanction | Approved contractual ceiling | Availability conditions may remain | Credit authority |
| Limit | Operative borrowing ceiling | Drawing power may be lower | Facility control |
| Drawing power | Eligible borrowing against current assets | Stale or ineligible assets | Working-capital control |
| Drawn balance | Amount currently used | Future drawing | Accounting balance |
| Undrawn amount | Available but unused commitment | Cancelled / unavailable portion | Liquidity and EAD |
| Contingent amount | Non-funded obligation | Funding only after trigger | Off-balance-sheet exposure |
| Exposure | Economic amount at risk | Depends on question | Risk measurement |
| EAD | Expected exposure at default | Not necessarily current balance | EL and capital |

```text
Funded exposure
→ cash already advanced

Undrawn commitment
→ possible future cash advance

Contingent facility
→ possible funded obligation after trigger
```

### Never confuse

```text
Sanction amount ≠ Limit
Limit ≠ Drawing power
Drawing power ≠ Balance
Balance ≠ Exposure
Exposure ≠ EAD
Undrawn ≠ Risk-free
```

## 5. Every loan and facility belongs to a product-mechanics family

| Family | Facility type | Repayment mechanic | Main risk driver | EAD mechanic |
|---|---|---|---|---|
| Term | Term loan | Scheduled principal + interest | Cash flow + leverage | Amortising balance |
| Term | Demand loan | Demand / short tenor | Liquidity + rollover | Current balance |
| Retail secured | Housing / mortgage loan | Long amortisation | Affordability + property | Amortising balance |
| Secured | Loan against property | Instalment / bullet | Cash flow + property | Schedule balance |
| Retail unsecured | Personal / consumer loan | Instalments | Income + behaviour | Amortising balance |
| Retail | Education loan | Moratorium + instalments | Future income + co-obligor | Schedule balance |
| Asset finance | Vehicle / equipment finance | Instalments | Asset use + cash flow | Amortising balance |
| Secured | Gold-backed loan | Bullet / instalment | Margin + gold value | Balance |
| Agriculture | Agricultural term loan | Crop / activity schedule | Yield + price + season | Schedule balance |
| Project | Project finance | Sculpted debt service | Project cash flow + completion | Draw + amortisation |
| Transaction | Acquisition finance | Transaction-specific | Leverage + refinancing | Drawn / committed |
| Working capital | Cash credit | Revolving | Stock + receivables + cash cycle | Drawn + future draw |
| Working capital | Overdraft | Revolving | Liquidity stress + conduct | Drawn + future draw |
| Working capital | Revolving credit line | Draw / repay / redraw | Liquidity + refinancing | Drawn + CCF on undrawn |
| Working capital | Working-capital demand loan | Short funded tranche | Operating cycle | Current balance |
| Retail revolving | Credit card | Revolving | Behaviour + utilisation | Drawn + future use |
| Trade | Bills purchased | Receivable collection | Buyer / seller performance | Funded bill |
| Trade | Bills discounted | Receivable collection | Obligor quality | Funded bill |
| Trade | Receivables / invoice finance | Receivable liquidation | Dilution + debtor quality | Advance against receivable |
| Export | Packing / pre-shipment credit | Export cycle | Execution + buyer | Funded amount |
| Export | Post-shipment / export credit | Export receivable | Buyer + country + collection | Funded receivable |
| Trade | Trade-related funded advance | Transaction liquidation | Goods + counterparty | Funded amount |
| Non-fund | Letter of credit | Payment after compliant trigger | Applicant + trade event | Contingent → funded |
| Non-fund | Bank guarantee | Payment after valid invocation | Applicant + beneficiary event | Contingent → funded |
| Non-fund | Co-acceptance | Payment if buyer fails | Buyer + bill | Contingent → funded |
| Commitment | Undrawn cancellable line | Availability can cease | Draw propensity | Regulatory / internal conversion |
| Commitment | Undrawn committed line | Bank remains committed | Stress drawdown | CCF × undrawn |

### Spine case — Shakti Components Private Limited

```text
Borrower          Shakti Components Private Limited
Business          auto-component manufacturer
Facility          cash credit
Sanctioned limit  ₹8.00 crore
Primary source    operating cash conversion
Security          stock + receivables + collateral property
```

## 6. Amortising, bullet, revolving and contingent facilities fail differently

| Structure | Balance path | Stress behaviour | Main EAD question | Main recovery question |
|---|---|---|---|---|
| Amortising | Declining | Missed instalments | Balance at failure | Remaining tenor + security |
| Bullet | Stable until maturity | Refinance dependence | Full maturity balance | Exit source + collateral |
| Balloon | Partial amortisation | Large terminal payment | Balloon at failure | Refinance + asset value |
| Demand | Short / callable | Renewal dependence | Current funded amount | Liquidity + security |
| Revolving | Variable | Draws rise under stress | Future utilisation | Current assets + guarantees |
| Contingent | Off-balance-sheet | Trigger converts to funded | Conversion probability | Reimbursement + security |

```text
Revolving stress
→ cash generation weakens
→ borrower uses liquidity buffer
→ drawdown increases
→ EAD rises before default
```

```text
Contingent stress
→ guarantee invoked / LC devolves
→ off-balance-sheet claim becomes funded
→ collection starts against applicant
```

### Spine case

```text
Cash credit
→ revolving structure
→ sanction remains ₹8.00 crore
→ availability constrained by drawing power
→ stress can increase drawing before NPA
```

## 7. Primary repayment source comes before collateral

| Question | Primary source | Secondary source |
|---|---|---|
| Retail housing | Household disposable income | Property sale |
| Vehicle finance | Household / business cash flow | Vehicle realisation |
| MSME working capital | Operating cash conversion | Stock + receivables + collateral |
| Corporate term loan | Enterprise free cash flow | Charged assets + guarantees |
| Project finance | Project cash flow | Project security package |
| Trade finance | Transaction / receivable liquidation | Goods + recourse + guarantee |

```text
Credit decision
→ identify repayment source
→ test sustainability
→ stress cash flow
→ structure facility
→ test collateral only for downside
```

### Permanent trap

```text
High collateral value ≠ strong borrower
Low LTV ≠ low PD
Guarantee ≠ operating cash flow
Security surplus ≠ repayment capacity
```

### Mental model

```text
Repayment source
→ prevents default

Collateral
→ reduces loss after default
```

## 8. Underwriting evidence changes by borrower segment

| Area | Retail | MSME | Corporate |
|---|---|---|---|
| Identity | KYC + bureau identity | Entity + proprietor / promoters | Group + legal entities |
| Credit history | CIC tradelines + DPD | CIC + banking conduct | External rating + lender conduct where relevant |
| Repayment capacity | Income + obligations | Cash flow + DSCR + turnover | FCF + leverage + liquidity |
| Stability | Employment / income continuity | Customer + supplier + promoter dependence | Industry + strategy + market position |
| Structure | Standard product policy | Amount + tenor + security | Facility package + covenants + seniority |
| Approval | Automated / refer | Delegated + analyst | Credit authority / committee |

### RBI-registered credit information companies

| Credit information company | Retail use | Commercial use |
|---|---|---|
| TransUnion CIBIL | Credit report + score products | Borrower / promoter history |
| Experian | Credit report + score products | Borrower / promoter history |
| Equifax | Credit report + score products | Borrower / promoter history |
| CRIF High Mark | Credit report + score products | Borrower / promoter history |

```text
Identity + bureau tradelines
→ repayment history
→ utilisation + balances
→ enquiries + new credit
→ bureau report / bureau score
→ lender application score + policy
→ affordability / eligibility
→ approve / refer / decline
```

```text
Bureau score
≠ lender application score
≠ internal rating
≠ approval decision
```

### Underwriting decision table

| Condition | Credit response |
|---|---|
| Sustainable repayment + acceptable risk + workable structure | Approve within authority |
| Sustainable repayment + structure weakness | Restructure terms before approval |
| Marginal evidence + resolvable uncertainty | Refer / obtain evidence |
| Unsustainable repayment | Decline regardless of collateral surplus |

## 9. Profit does not service debt — cash does

```text
Revenue
− operating costs
=
EBITDA
− cash interest
− cash tax
− working-capital investment
− capex
=
Free cash flow
```

| Accounting signal | Credit translation |
|---|---|
| Revenue growth | Scale + demand |
| EBITDA | Operating earning capacity |
| EBITDA margin | Operating resilience |
| Profit after tax | Equity accounting outcome |
| Receivable build | Cash trapped with customers |
| Inventory build | Cash trapped in stock |
| Payable stretch | Supplier financing / stress |
| Capex | Cash absorbed before debt service |
| Free cash flow | Cash available after operating needs |

```text
Profit ↑
+
Receivables ↑↑
+
Inventory ↑↑
→ cash conversion weakens
→ debt dependence can rise
```

### Never confuse

```text
Revenue ≠ Cash collection
EBITDA ≠ Cash flow
Profit ≠ Free cash flow
Cash balance ≠ Recurring repayment capacity
```

## 10. Ratios answer different credit questions

| Metric | Formula | Measures | Main failure mode |
|---|---|---|---|
| Revenue growth | `(Current revenue − prior revenue) / prior revenue` | Sales direction | Growth without cash conversion |
| Gross margin | `Gross profit / revenue` | Pricing + direct cost | Mix and accounting effects |
| EBITDA margin | `EBITDA / revenue` | Operating profitability | Ignores capex + working capital |
| Debt / EBITDA | `Gross debt / EBITDA` | Gross leverage | Weak for volatile EBITDA |
| Net debt / EBITDA | `(Debt − usable cash) / EBITDA` | Leverage after liquidity | Cash may be trapped / restricted |
| Interest coverage | `EBITDA or EBIT / interest` | Interest service | Ignores principal |
| DSCR | `Cash available for debt service / debt service` | Principal + interest service | Definition varies by policy |
| Current ratio | `Current assets / current liabilities` | Near-term balance-sheet liquidity | Asset quality ignored |
| Receivable days | `Receivables / revenue x 365` | Collection speed | Seasonality / tax effects |
| Inventory days | `Inventory / COGS x 365` | Stock holding | Obsolescence hidden |
| Payable days | `Payables / COGS x 365` | Supplier credit | Stretch may signal stress |
| Cash conversion cycle | `Receivable days + inventory days − payable days` | Working-capital duration | Sector comparison required |
| LTV | `Loan / collateral value` | Collateral leverage | Valuation basis dominates |
| Facility utilisation | `Drawn / operative limit` | Liquidity usage | Limit may exceed drawing power |
| Collateral coverage | `Realisable collateral / exposure` | Recovery cushion | Enforceability + costs ignored |
| Recovery rate | `Net recovery / defaulted exposure` | Realised recovery | Timing ignored |
| Expected loss rate | `PD x LGD` | Average loss fraction | EAD omitted |
| Capital ratio | `Eligible capital / RWA` | Prudential capitalisation | Not a liquidity measure |

```text
Ratio
→ numerator definition
→ denominator definition
→ observation date
→ peer / history
→ covenant / policy context
```

## 11. Facility structure allocates credit risk

| Structure lever | Credit effect | Failure signal |
|---|---|---|
| Amount | Maximum funded need | Over-sizing |
| Tenor | Time allowed for repayment | Maturity beyond cash visibility |
| Amortisation | Speed of exposure reduction | Back-ended repayment |
| Limit | Revolving capacity | Persistent high utilisation |
| Drawing power | Asset-backed availability | Stale / weak stock statements |
| Covenant | Early control point | Breach / waiver cycle |
| Security | Recovery position | Perfection / valuation gap |
| Guarantee | Additional payer | Weak guarantor / legal limitation |
| Conditions precedent | Before first draw | Unmet control gate |
| Conditions subsequent | Post-disbursement obligation | Documentation drift |
| Pricing | Return for risk + capital | Price not cure for bad credit |

### Facility structure decision table

| Cash-flow pattern | Structure response |
|---|---|
| Predictable recurring surplus | Amortising term debt |
| Seasonal operating cycle | Working-capital line |
| Short receivable cycle | Invoice / bill finance |
| Construction then operation | Project draw schedule + sculpted repayment |
| Contingent contractual obligation | LC / guarantee |
| Refinancing-only repayment | High maturity risk + stronger controls |

### Spine case

```text
Sanctioned CC limit  ₹8.00 crore
Opening drawing power ₹6.50 crore
Opening draw           ₹5.80 crore
Undrawn to sanction    ₹2.20 crore
Utilisation             72.5%
```

## 12. Collateral changes recovery more directly than default probability

| Collateral class | Examples | Value basis | Main failure mode | Main LGD effect |
|---|---|---|---|---|
| Cash / deposits | Bank deposit + cash margin | Encashable amount | Set-off / lien defects | High recovery certainty |
| Sovereign / marketable security | Government security + eligible securities | Market value less haircut | Market movement | Fast realisation if perfected |
| Receivables | Trade debtors | Eligible receivable value | Dispute + dilution + ageing | Collection-dependent |
| Inventory | Raw material + WIP + finished goods | Eligible stock value | Obsolescence + shrinkage | Forced-sale discount |
| Warehouse receipt / commodity | Stored commodity | Market value | Quality + custody | Commodity volatility |
| Plant / machinery | Fixed equipment | Realisable value | Specialised-use discount | Sale-cost heavy |
| Vehicle | Commercial / personal vehicle | Market value | Depreciation + damage | Product-dependent |
| Immovable property | Residential / commercial / industrial | Realisable property value | Title + liquidity + time | Often material recovery source |
| Gold jewellery | Pledged gold ornaments | Eligible gold value | Price + purity + auction | High liquidity if controlled |
| Life policy / specified instrument | Assignable policy / instrument | Surrender / encashment value | Assignment defect | Contract-value recovery |
| Project assets | Plant + concession-linked assets | Project realisable value | Completion + legal rights | Going-concern sensitive |
| Intangible rights | Licence + concession + contractual right | Case-specific | Enforceability + transferability | Limited tangible-security recognition |

### Credit-support census

| Support | Risk role | Main dependency |
|---|---|---|
| Personal guarantee | Additional individual payer | Net worth + enforceability |
| Corporate guarantee | Additional corporate payer | Guarantor credit quality |
| Central / State support | Public-sector support | Exact guarantee terms |
| Eligible guarantee scheme | Covered loss support | Scheme eligibility + claim conditions |
| Cash margin | Immediate funded cushion | Control and availability |
| Letter of comfort | Behavioural / contractual support | Wording + legal effect |

```text
Borrower weakness
→ PD can rise

Collateral strength
→ recovery can improve
→ LGD can fall

Collateral strength
≠ automatic PD reduction
```

## 13. Security value without enforceable security is incomplete protection

| Security-interest / charge type | Asset / right | Possession | Creation logic | Main perfection issue |
|---|---|---|---|---|
| Lien | Deposit / property in control | Usually creditor control | Right to retain | Contract + control |
| Pledge | Movable goods / securities | Creditor / bailee possession | Delivery + pledge agreement | Possession + identification |
| Hypothecation | Movable assets | Borrower possession | Charge without delivery | Documentation + registration where applicable |
| Assignment | Receivable / policy / contractual right | Right transferred | Assignment instrument | Notice + transfer restrictions |
| Simple mortgage | Immovable property | Borrower possession | Personal covenant + property charge | Instrument + registration |
| Mortgage by conditional sale | Immovable property | Usually borrower | Ostensible sale subject to condition | Form + registration |
| Usufructuary mortgage | Immovable property | Mortgagee possession | Rents / profits toward debt | Possession + terms |
| English mortgage | Immovable property | Absolute transfer subject to re-transfer | Transfer + repayment covenant | Instrument + registration |
| Mortgage by deposit of title deeds | Immovable property | Title deeds deposited | Intent to create security | Deposit + evidence + local law requirements |
| Anomalous mortgage | Immovable property | Mixed | Contractual combination | Exact terms |
| Fixed charge | Specific asset | Borrower often retains use | Identified asset charge | Registration + restrictions |
| Floating charge | Changing asset pool | Borrower use until crystallisation | Floating security | Crystallisation + priority |

```text
Asset exists
→ borrower owns / can encumber
→ security created
→ required registration / notice completed
→ priority established
→ documents controlled
→ enforceability maintained
```

### Never confuse

```text
Collateral ≠ Charge
Ownership ≠ Enforceable security
Sanction condition ≠ Perfection
Guarantee ≠ Collateral
Negative lien ≠ Security interest
```

## 14. First charge, pari passu and second charge are different recovery positions

| Priority position | Meaning | Recovery implication | Main risk |
|---|---|---|---|
| Exclusive first charge | Sole first-ranking claim | First access to charged value | Prior hidden claim / perfection defect |
| Pari passu first charge | Shared first rank | Pro-rata sharing among first-rank lenders | Inter-creditor mechanics |
| Second charge | Ranks after first charge | Residual value only | Thin residual cushion |
| Subsequent charge | Lower contractual rank | Further residual value | Multiple prior claims |
| Contractual subordination | Payment priority ceded | Junior recovery | Standstill / enforcement terms |
| Unsecured | No specific charged asset | General creditor recovery | Low recovery certainty |

```text
Gross asset value
− enforcement costs
− prior-ranking claims
=
value available to current rank
```

```text
Same property
+
same valuation
≠
same LGD

Priority changes recovery waterfall
```

### Mental model

```text
Value
→ validity
→ perfection
→ priority
→ enforceability
→ net recovery
```

## 15. Sanction limit, drawing power, outstanding and EAD are not substitutes

```text
Sanctioned limit
→ contractual ceiling

Drawing power
→ current eligible ceiling

Outstanding
→ current funded use

EAD
→ expected amount at default
```

| Spine-case point | Amount | Credit meaning |
|---|---:|---|
| Sanctioned cash-credit limit | ₹8.00 crore | Contractual maximum |
| Opening drawing power | ₹6.50 crore | Eligible current-asset borrowing base |
| Opening outstanding | ₹5.80 crore | Funded draw |
| Undrawn to sanction | ₹2.20 crore | Remaining contractual capacity |
| Stressed drawing power | ₹5.20 crore | Reduced eligible borrowing base |
| Stressed outstanding | ₹5.90 crore | Funded exposure after stress draw |
| Excess over drawing power | ₹0.70 crore | Irregular amount |

```text
₹8.00 crore sanction
→ ₹6.50 crore opening drawing power
→ ₹5.80 crore draw
→ stock / receivables weaken
→ ₹5.20 crore drawing power
→ ₹5.90 crore outstanding
→ ₹0.70 crore continuous excess
```

### Never confuse

```text
Sanction ≠ Availability
Availability ≠ Drawing power surplus
Outstanding ≠ EAD
Irregular amount ≠ Total exposure
```

## 16. Monitoring searches for deterioration before contractual failure

| Signal family | Examples | Interpretation | Response |
|---|---|---|---|
| Payment conduct | DPD + missed instalment | Contract stress | Collections / escalation |
| Limit conduct | Persistent high utilisation + excess | Liquidity stress | Review drawing power / limit |
| Account turnover | Falling credits | Weak cash generation | Cash-flow review |
| Financial | Leverage ↑ + coverage ↓ | Debt capacity weakening | Rating review |
| Working capital | Receivable days ↑ + inventory days ↑ | Cash conversion weakening | Borrowing-base review |
| Covenant | Breach / repeated waiver | Structural stress | Escalation / amendment review |
| Bureau / CIC | New debt + delinquency | External leverage / conduct | Re-underwrite |
| External rating | Downgrade / watch | Market / agency signal | Risk-weight + credit review |
| Sector | Demand / price shock | Common-factor risk | Sector overlay / limit review |
| Security | Value erosion / documentation lapse | LGD worsening | Revaluation / perfection action |
| Management | Auditor / promoter / governance event | Execution and integrity risk | Escalation |

### CRILC monitoring apparatus

```text
Aggregate exposure with lender ≥ ₹5 crore
→ credit information + SMA reported to CRILC
→ CRILC-Main monthly
→ default instances weekly
→ Friday close
→ preceding working day if Friday holiday
```

### Spine case

```text
Shakti exposure > ₹5 crore
→ CRILC population
→ drawing power falls
→ outstanding stays above drawing power
→ monitoring becomes regulatory reporting input
```

## 17. Arrears, DPD and SMA run escalation clocks

| Credit form | State | Trigger |
|---|---|---|
| Term / instalment | SMA-0 | Amount overdue 1–30 days |
| Term / instalment | SMA-1 | Amount overdue 31–60 days |
| Term / instalment | SMA-2 | Amount overdue 61–90 days |
| Cash credit / overdraft | SMA-1 | Continuous excess over sanction / drawing power >30 and up to 60 days |
| Cash credit / overdraft | SMA-2 | Continuous excess over sanction / drawing power >60 and up to 90 days |
| Cash credit / overdraft | Out of order | RBI out-of-order condition for 90 days |
| Term / instalment | NPA | Interest / principal overdue >90 days |

```text
Due date missed
→ Overdue
→ SMA-0        1–30 DPD
→ SMA-1        31–60 DPD
→ SMA-2        61–90 DPD
→ NPA          >90 DPD
```

```text
CC / OD
→ outstanding continuously above sanctioned limit / drawing power
→ SMA-1        >30 to 60 days
→ SMA-2        >60 to 90 days
→ out of order 90 days
→ NPA
```

RBI out-of-order also captures no credits continuously for the prescribed period, or credits insufficient to cover interest debited during the prescribed previous period.

### Spine case

```text
₹5.90 crore outstanding
> ₹5.20 crore drawing power
→ excess ₹0.70 crore
→ >30 days  SMA-1
→ >60 days  SMA-2
→ 90-day out-of-order condition completed
→ NPA
```

### Never confuse

```text
Overdue ≠ SMA
SMA ≠ NPA
SMA-2 ≠ Default by definition
DPD ≠ Arrears amount
```

## 18. Default, NPA and credit-impaired are different regimes

| Regime | Trigger basis | Unit | Main use |
|---|---|---|---|
| Contractual / resolution default | Debt due and payable but unpaid | Debt / borrower | Stress recognition + resolution |
| RBI NPA | IRACP overdue / out-of-order rule | Borrower-linked asset classification | Income recognition + provisioning |
| Internal default | Bank-governed default definition | Obligor / facility by policy | Rating + PD + collections |
| Credit-impaired | Ind AS 109 accounting evidence | Financial asset | ECL measurement for Ind AS reporters |

```text
Payment failure
→ can satisfy contractual default

Time / conduct test
→ can satisfy RBI NPA rule

Credit evidence
→ can satisfy internal default / credit-impaired test
```

### Spine case

```text
Shakti
→ continuous CC irregularity
→ out-of-order condition completed
→ RBI NPA
→ substandard classification starts
```

### Never confuse

```text
Default ≠ NPA
NPA ≠ Credit-impaired
SMA-2 ≠ Stage 2
NPA ≠ Write-off
Default ≠ 100% loss
```

## 19. Standard, substandard, doubtful and loss are prudential states

### RBI asset-classification census

| State | Classification basis | Recovery view | Next state |
|---|---|---|---|
| Standard | Performing under IRACP | Normal collection | SMA / NPA if stress persists |
| Substandard | NPA for ≤12 months | Defined credit weakness | Doubtful after prescribed ageing |
| Doubtful | Remained substandard for 12 months | Full collection highly questionable | Ageing bands / loss |
| Loss | Identified uncollectible amount not wholly written off | Salvage only | Write-off / full provision |

### RBI provisioning census — base classification rates

| Classification / category | Secured | Unsecured |
|---|---:|---:|
| Standard — farm credit | 0.25% | 0.25% |
| Standard — individual housing | 0.25% | 0.25% |
| Standard — Small + Micro | 0.25% | 0.25% |
| Standard — Medium | 0.40% | 0.40% |
| Standard — CRE | 1.00% | 1.00% |
| Standard — CRE-RH | 0.75% | 0.75% |
| Standard — other | 0.40% | 0.40% |
| Standard — teaser housing | 2.00% | 2.00% |
| Standard — teaser post-reset | 0.40% | 0.40% |
| Standard — natural-calamity restructured | 5.00% | 5.00% |
| Standard — other restructured | Resolution directions | Resolution directions |
| Substandard — general | 15% | 25% |
| Substandard — qualifying infrastructure | 15% | 20% total |
| Substandard — lease | 15% | 25% |
| Doubtful — uncovered portion | — | 100% |
| Doubtful — secured ≤1 year | 25% | — |
| Doubtful — secured >1 to 3 years | 40% | — |
| Doubtful — secured >3 years | 100% | — |
| Loss retained | 100% | 100% |

### Standard-asset special overlays carried in IRACP

| Situation | Provision / trigger |
|---|---|
| Project finance — CRE construction phase | 1.25% |
| Project finance — CRE-RH construction phase | 1.00% |
| Project finance — other construction phase | 1.00% |
| Project finance — operational CRE | 1.00% |
| Project finance — operational CRE-RH | 0.75% |
| Project finance — operational other | 0.40% |
| UFCE likely loss / EBID up to 15% | 0 bps incremental |
| UFCE >15% to 30% | 20 bps incremental |
| UFCE >30% to 50% | 40 bps incremental |
| UFCE >50% to 75% | 60 bps incremental |
| UFCE >75% | 80 bps incremental |

```text
Security realisable value < 50% of last assessed / accepted value
→ significant erosion
→ NPA may move straight to doubtful

Security realisable value < 10% of outstanding
→ security ignored
→ straight to loss asset
```

### Spine case

```text
NPA outstanding       ₹6.00 crore
Classification        substandard
Realisable security   ₹4.50 crore
Provision rate        15%
Provision             ₹0.90 crore = ₹90 lakh
```

Later deterioration:

```text
Remains NPA >12 months
→ doubtful
→ realisable security ₹3.60 crore
→ unsecured portion   ₹2.40 crore
→ first doubtful year secured provision 25% x ₹3.60 crore = ₹0.90 crore
→ unsecured provision 100% x ₹2.40 crore = ₹2.40 crore
→ total provision ₹3.30 crore
```

## 20. Cure, upgrade, regularisation and restructuring are different transitions

| Transition | Meaning | RBI / credit consequence |
|---|---|---|
| Regularisation | Current irregularity removed | May stop further delinquency escalation |
| Cure | Internal default / watch state returns to acceptable policy state | Governed internal transition |
| NPA upgrade | Entire arrears of interest + principal paid | Standard only after RBI condition met |
| Multi-facility upgrade | Entire arrears across all facilities with bank paid | Borrower-wide upgrade condition |
| Restructuring | Contract terms changed for stress / viability | Separate resolution treatment |
| Technical write-off | Accounting removal from branch / books treatment | Recovery claim can remain |

```text
Irregular today
→ paid tomorrow
→ regularised

NPA
→ partial arrears paid
→ still NPA

NPA
→ entire arrears across facilities paid
→ eligible for upgrade to standard
```

### Never confuse

```text
Regularisation ≠ Cure
Cure ≠ NPA upgrade
NPA upgrade ≠ Restructuring
Restructuring ≠ Waiver
Technical write-off ≠ Forgiveness
```

## 21. PD measures likelihood — not loss

| PD element | Required question |
|---|---|
| Borrower / obligor | Who can default |
| Horizon | Over what period |
| Default definition | What event counts |
| Observation date | Risk as of when |
| Calibration | PIT / TTC / accounting / capital context |
| Model / rating | How risk is estimated |

```text
Borrower evidence
→ score / rating factors
→ grade
→ calibrated PD
```

```text
PIT PD
→ stronger current-condition sensitivity

TTC PD
→ smoother cycle sensitivity
```

### Spine case

```text
Shakti internal one-year PD
→ 5.0%
→ illustrative bank estimate
→ not RBI NPA probability
→ not external rating
```

### Never confuse

```text
PD ≠ Loss rate
PD ≠ Risk weight
PD ≠ NPA ratio
Low PD ≠ Low LGD
```

## 22. LGD measures severity after default

```text
Defaulted exposure
− gross recoveries
− recovery costs
− time-value effect where model requires
=
loss after recovery
```

```text
LGD ≈ 1 − Net Recovery Rate

LGD                loss given default
Net Recovery Rate  net recovered value / defaulted exposure
```

| LGD driver | Lower-loss tendency | Higher-loss tendency |
|---|---|---|
| Seniority | First-ranking | Subordinated / unsecured |
| Collateral | Liquid + enforceable | Illiquid + disputed |
| Valuation | Conservative realisable value | Stale appraisal |
| Guarantee | Strong + callable | Weak / conditional |
| Recovery time | Short | Long |
| Costs | Low | High |
| Jurisdiction / process | Predictable enforcement | Delayed / contested enforcement |

### Spine case

```text
Shakti internal LGD
→ 40.0%
→ illustrative pre-default estimate

Model recovery assumption
→ 60.0%
```

### Never confuse

```text
LGD ≠ LTV
LGD ≠ Provision rate
Appraised value ≠ Net recovery value
Guarantee amount ≠ Cash recovered
```

## 23. EAD measures exposure at the default point

```text
Amortising facility
→ projected outstanding at default

Revolving facility
→ drawn amount + expected future drawing
```

```text
EAD = Drawn + CCF x Undrawn

CCF      conversion factor for undrawn amount
Drawn    funded amount at observation
Undrawn  available commitment before default
```

### Spine case

```text
Opening drawn            ₹5.80 crore
Undrawn to sanction      ₹2.20 crore
Illustrative internal CCF 25%

EAD
= ₹5.80 crore + 25% x ₹2.20 crore
= ₹6.35 crore
```

The 25% CCF is an illustrative internal modelling assumption for the spine case, not an RBI regulatory CCF.

### Never confuse

```text
Current balance ≠ EAD
Limit ≠ EAD
CCF ≠ PD
Undrawn amount ≠ Zero exposure
```

## 24. Expected loss combines different dimensions

| Parameter | Question | Main grain | Spine case |
|---|---|---|---:|
| PD | Will default happen | Obligor | 5.0% |
| LGD | How much is lost if default occurs | Facility | 40.0% |
| EAD | How much is exposed at default | Facility | ₹6.35 crore |

```text
Expected Loss Rate = PD x LGD
Expected Loss Amount = PD x LGD x EAD

PD    probability of default over the horizon
LGD   loss given default as fraction of exposure
EAD   exposure at default
```

```text
Spine case

5.0% x 40.0% x ₹6.35 crore
= 2.0% x ₹6.35 crore
= ₹0.127 crore
= ₹12.70 lakh
```

```text
PD
→ frequency dimension

LGD
→ severity dimension

EAD
→ size dimension

EL
→ average expected credit cost
```

### Permanent trap

```text
Expected loss ≠ RBI provision
Expected loss ≠ Realised loss
Expected loss ≠ RWA
Expected loss ≠ Capital requirement
```

## 25. Score, grade, rating and PD form a chain — not synonyms

| Object | Form | Main use |
|---|---|---|
| Raw variable | Income / DPD / leverage / utilisation | Model input |
| Score | Numeric model output | Rank risk |
| Grade | Ordered bucket | Credit policy + monitoring |
| Internal rating | Bank-assigned credit grade | Underwriting + portfolio management |
| PD | Probability estimate | Loss measurement + risk differentiation |
| External rating | ECAI opinion / grade | External assessment + SA input where eligible |

```text
Inputs
→ model score
→ internal grade
→ calibrated PD
→ decision / monitoring use
```

```text
Discrimination
→ who is riskier

Calibration
→ how risky

Stability
→ whether mapping still holds
```

### Never confuse

```text
Score ≠ Grade
Grade ≠ PD
Internal rating ≠ External rating
External rating ≠ Internal PD
Good ranking ≠ Good calibration
```

## 26. Ind AS 109 changes the accounting answer — not the underlying credit event

For the commercial-bank lens, RBI IRACP remains the operative prudential classification and provisioning spine. Ind AS 109 is retained here only to locate the accounting ECL architecture used by Ind AS reporters.

| Ind AS 109 state | Credit state | Loss horizon |
|---|---|---|
| Stage 1 | Performing without SICR | 12-month ECL |
| Stage 2 | Significant increase in credit risk | Lifetime ECL |
| Stage 3 | Credit-impaired | Lifetime ECL |

```text
Credit-impaired?
        ├─ Yes → Stage 3
        └─ No
             ↓
        SICR since origination?
                ├─ Yes → Stage 2
                └─ No  → Stage 1
```

```text
RBI IRACP
→ overdue / out-of-order
→ NPA classification
→ prudential provision

Ind AS 109
→ credit-risk change
→ stage
→ ECL
```

### Never confuse

```text
RBI NPA ≠ Ind AS Stage 3
SMA-2 ≠ Stage 2
RBI provision ≠ ECL
12-month ECL ≠ 12 months of cash loss
```

## 27. Basel changes the prudential capital answer — not the underlying exposure

```text
Exposure
→ regulatory exposure class
→ Standardised Approach treatment
→ eligible external rating where applicable
→ credit risk mitigation
→ risk weight
→ RWA
→ capital ratio
```

### RBI Standardised Approach exposure-class census

| Exposure class | Routing basis |
|---|---|
| Domestic sovereign / RBI-linked sovereign claims | Prescribed sovereign treatment |
| Foreign sovereign / central bank | Sovereign rating + currency conditions |
| Public sector entity | Domestic corporate treatment / foreign PSE mapping |
| Eligible MDB / BIS / IMF | Prescribed multilateral treatment |
| Banks | Bank capital / rating treatment |
| Primary dealers | Corporate-style treatment |
| Corporates + NBFCs | Eligible rating / unrated mapping |
| Regulatory retail | Qualifying retail criteria |
| Residential property | LTV + sanction-date treatment |
| Commercial real estate | CRE / CRE-RH treatment |
| Non-performing assets | Provision + eligible security treatment |
| Specified high-risk categories | Prescribed higher risk weight |
| Other assets | Prescribed residual treatment |
| Off-balance-sheet items | CCF / exposure method + counterparty risk weight |

### Domestic ECAI census — RBI eligible for risk weighting

| Domestic ECAI | Standardised Approach role |
|---|---|
| Acuité Ratings & Research | Eligible external credit assessment |
| Brickwork Ratings India | Eligible external credit assessment |
| CARE Ratings | Eligible external credit assessment |
| CRISIL Ratings | Eligible external credit assessment |
| ICRA | Eligible external credit assessment |
| India Ratings and Research | Eligible external credit assessment |
| INFOMERICS Valuation and Rating | Eligible external credit assessment |

```text
Eligible external rating
→ RBI mapping
→ regulatory risk weight
```

### Long-term domestic rating mapping — corporate / NBFC claims in scope

| External rating category | Standardised risk weight |
|---|---:|
| AAA | 20% |
| AA | 30% |
| A | 50% |
| BBB | 100% |
| BB and below | 150% |
| Unrated — general | 100% |
| Unrated — banking-system exposure >₹200 crore | 150% |
| Previously rated then unrated — banking-system exposure >₹100 crore | 150% |

### Short-term domestic rating mapping

| External rating category | Standardised risk weight |
|---|---:|
| A1+ | 20% |
| A1 | 30% |
| A2 | 50% |
| A3 | 100% |
| A4 / D | 150% |
| Unrated — general | 100% |

### Credit-risk-mitigation census — core recognised forms

| CRM family | Prudential role | Recognition dependency |
|---|---|---|
| Eligible financial collateral | Reduce secured exposure under prescribed method | Eligibility + haircut + control |
| Eligible guarantee | Substitute / reduce protected credit risk as prescribed | Eligible guarantor + direct claim |
| Credit derivative | Protection where eligible | Contract + eligible protection provider |
| Netting where recognised | Reduce net exposure | Enforceable netting arrangement |

```text
Internal rating ≠ External rating
External rating ≠ Regulatory risk weight
Internal rating ≠ Regulatory risk weight
```

## 28. Single-name risk becomes a regulatory large-exposure problem

```text
Counterparty exposure
→ aggregate eligible exposure value
→ compare with eligible Tier 1 capital
→ identify large exposure
→ test regulatory ceiling
```

| Large-exposure measure | RBI ceiling / trigger | Capital base |
|---|---:|---|
| Large-exposure identification | ≥10% | Eligible Tier 1 capital |
| Single counterparty | ≤20% | Eligible Tier 1 capital |
| Exceptional Board-approved single-counterparty increment | +5% | Eligible Tier 1 capital |
| Single counterparty with exceptional increment | ≤25% | Eligible Tier 1 capital |
| Group of connected counterparties | ≤25% | Eligible Tier 1 capital |

```text
Single borrower
≠ connected group

Large exposure threshold
≠ exposure ceiling
```

```text
Borrower A
+
Borrower B
+
common control / economic dependence
→ connected-counterparty assessment
→ group exposure aggregation
```

### Decision table

| Condition | Outcome |
|---|---|
| Exposure <10% eligible Tier 1 capital | Not a large exposure by threshold |
| Exposure ≥10% | Large-exposure population |
| Single counterparty >20% without exception | General ceiling breach |
| Single counterparty >20% to 25% with valid Board exception | Exceptional permitted band |
| Connected group >25% | Group ceiling breach |

## 29. Stress changes PD, LGD, EAD, loss and capital together

| Stress method | Shock shape | Main use |
|---|---|---|
| Base case | Expected path | Planning anchor |
| Sensitivity | One factor | Driver isolation |
| Scenario | Coherent multi-factor shock | Portfolio impact |
| Severe plausible stress | Material downside | Resilience assessment |
| Reverse stress | Failure point backward | Vulnerability discovery |
| Management-action case | Stress plus credible response | Mitigated outcome |

```text
Macro / sector shock
→ revenue ↓
→ cash conversion weakens
→ PD ↑
→ collateral value ↓
→ LGD ↑
→ revolving drawdown ↑
→ EAD ↑
→ credit loss ↑
```

```text
Credit deterioration
→ provisions ↑
→ earnings / CET1 ↓

Rating migration / default
→ RWA can ↑

Capital ratio
→ numerator pressure + denominator pressure
```

### Never confuse

```text
Stress ≠ Forecast
Sensitivity ≠ Scenario
Expected loss ≠ Stress loss
Management action ≠ Assumed rescue
```

## 30. Credit risk meets liquidity and model risk only at its boundaries

### Credit ↔ liquidity boundary

```text
Borrower stress
→ CC / OD / card / RCF drawing ↑
→ EAD ↑
+
bank cash outflow ↑
```

```text
Bank funding stress
→ refinancing tightens
→ borrower liquidity weakens
→ PD can ↑
```

### Credit-model census

| Model / tool | Credit use | Main output | Primary owner boundary |
|---|---|---|---|
| Application scorecard | Retail origination | Score / decision input | Credit risk / analytics |
| Behavioural scorecard | Retail monitoring | Behaviour risk score | Credit risk / analytics |
| Internal rating model | MSME / corporate | Grade | Credit risk |
| PD model | Loss likelihood | PD | Risk modelling |
| LGD model | Recovery severity | LGD | Risk modelling / recovery data |
| EAD / CCF model | Future exposure | EAD / CCF | Risk modelling |
| ECL model | Ind AS measurement where applicable | ECL | Finance + risk |
| Credit stress model | Scenario loss | Stressed parameters / losses | Enterprise risk / credit risk |

```text
Data
+ assumptions
+ methodology
+ implementation
→ model output
→ credit decision / loss estimate / capital input
```

### Never confuse

```text
Model output ≠ Decision
Monitoring ≠ Validation
Overlay ≠ Permanent repair
Capital ≠ Liquidity
```

## 31. Default starts recovery — it does not determine final loss

### Recovery-outcome census

| Outcome | Mechanism | Economic result |
|---|---|---|
| Cure | Internal return to acceptable state | Performing relationship may resume |
| Regularisation | Arrears / irregularity removed | Current conduct restored |
| Restructuring | Contract terms modified | Viability path changed |
| Collections | Cash pursued from borrower | Direct recovery |
| Guarantee invocation | Support provider called | Additional recovery source |
| Collateral realisation | Secured asset enforced / sold | Asset recovery |
| Compromise settlement | Agreed settlement below / around claim | Cash recovery + concession as applicable |
| Transfer / assignment | Exposure sold where permitted | Recovery via sale proceeds |
| Insolvency / legal recovery | Formal resolution / enforcement | Process-driven recovery |
| Technical write-off | Accounting removal treatment | Recovery effort may continue |
| Final write-off | Amount removed after recovery assessment | Residual book loss recognised |

```text
Default
→ borrower cash collection
→ guarantor support
→ collateral enforcement
→ settlement / restructuring / legal process
→ gross recovery
− enforcement + workout costs
→ net recovery
→ residual loss
```

### Spine case

```text
Defaulted exposure        ₹6.00 crore
Net collateral recovery  ₹3.60 crore
Other cash recovery       ₹0.60 crore
Total net recovery        ₹4.20 crore
Recovery rate             70.0%
Residual loss             ₹1.80 crore
Realised loss rate        30.0%
```

```text
Model LGD 40.0%
≠ realised loss rate 30.0%
```

## 32. Write-off, waiver, settlement and recovery are different outcomes

| Term | What changes | Borrower obligation | Recovery path |
|---|---|---|---|
| Provision | Loss allowance / prudential charge | Debt remains | Recovery continues |
| Technical write-off | Accounting presentation / branch treatment | Claim generally remains | Recovery continues |
| Write-off | Asset removed from books | Legal claim depends on action and terms | Recovery may continue where claim survives |
| Waiver | Creditor relinquishes amount | Obligation reduced / extinguished to waived extent | No recovery on waived amount |
| Compromise settlement | Agreed discharge on negotiated terms | Modified to settlement terms | Settlement proceeds |
| Recovery | Cash / value received | Debt reduced | Realised value |
| Residual loss | Exposure not recovered | Depends on legal closure | Economic loss |

```text
₹6.00 crore defaulted exposure
− ₹4.20 crore net recovery
= ₹1.80 crore residual loss
```

```text
Default ≠ Write-off
Write-off ≠ Waiver
Provision ≠ Write-off
Settlement ≠ Cure
Recovery ≠ Cure
```

### Spine case — complete path

```text
₹8.00 crore sanction
→ ₹6.50 crore opening drawing power
→ ₹5.80 crore opening draw
→ ₹5.20 crore stressed drawing power
→ ₹5.90 crore stressed draw
→ ₹0.70 crore excess
→ SMA-1
→ SMA-2
→ NPA
→ substandard
→ ₹0.90 crore initial NPA provision
→ internal PD 5.0%
→ internal LGD 40.0%
→ internal EAD ₹6.35 crore
→ expected loss ₹12.70 lakh
→ net recovery ₹4.20 crore
→ residual loss ₹1.80 crore
```

## 33. Every operative number belongs in one place

### Credit Risk — Thresholds and Numbers

| Item | Figure |
|---|---:|
| SMA-0 / SMA-1 / SMA-2 term | 1–30 / 31–60 / 61–90 days |
| Term-loan NPA | >90 days |
| CC / OD SMA-1 / SMA-2 | >30–60 / >60–90 days continuous excess |
| CC / OD out-of-order | 90 days |
| CRILC threshold / Main / default | ₹5 crore / monthly / weekly |
| NPA stock audit | ≥₹5 crore / annual |
| NPA property valuation | ≥₹5 crore / once in 3 years |
| Substandard / doubtful entry | ≤12 months NPA / after 12 months substandard |
| Doubtful secured ageing | ≤1 year 25% / >1–3 years 40% / >3 years 100% |
| Security erosion / ignore | <50% prior value / <10% outstanding |
| Standard farm + individual housing + Small + Micro | 0.25% |
| Standard Medium / other | 0.40% |
| Standard CRE / CRE-RH | 1.00% / 0.75% |
| Teaser housing / post-reset | 2.00% / 0.40% after 1 year |
| Natural-calamity restructured standard | 5.00% |
| Project construction CRE / CRE-RH / other | 1.25% / 1.00% / 1.00% |
| Project operational CRE / CRE-RH / other | 1.00% / 0.75% / 0.40% |
| UFCE bands | ≤15% 0 bps / >15–30% 20 / >30–50% 40 / >50–75% 60 / >75% 80 bps |
| Substandard secured / unsecured / qualifying infrastructure | 15% / 25% / 20% |
| Doubtful unsecured / loss retained | 100% / 100% |
| ECAI long-term AAA / AA / A / BBB / BB↓ | 20% / 30% / 50% / 100% / 150% |
| ECAI short-term A1+ / A1 / A2 / A3 / A4-D | 20% / 30% / 50% / 100% / 150% |
| ECAI unrated / >₹200 crore / former-rated >₹100 crore | 100% / 150% / 150% |
| Large exposure / single / Board increment / exceptional / group | ≥10% / ≤20% / +5% / ≤25% / ≤25% of eligible Tier 1 capital |
| Ind AS stages | Stage 1 / Stage 2 / Stage 3 |
| Stage 1 loss horizon | 12-month ECL |
| Ratio day-count | 365 |

### Spine-case numbers

```text
Sanction          ₹8.00 crore
Opening DP        ₹6.50 crore
Opening draw      ₹5.80 crore
Undrawn           ₹2.20 crore
Utilisation       72.5%
Stressed DP       ₹5.20 crore
Stressed draw     ₹5.90 crore
Excess            ₹0.70 crore
NPA outstanding   ₹6.00 crore
NPA security      ₹4.50 crore
Substandard prov  ₹0.90 crore / ₹90 lakh
Doubtful security ₹3.60 crore
Doubtful unsecured ₹2.40 crore
Doubtful secured prov ₹0.90 crore
Doubtful unsecured prov ₹2.40 crore
Doubtful total    ₹3.30 crore
PD                5.0%
LGD               40.0%
Assumed recovery  60.0%
CCF               25%
EAD               ₹6.35 crore
EL rate           2.0%
EL amount         ₹0.127 crore / ₹12.70 lakh
Collateral recovery ₹3.60 crore
Other recovery    ₹0.60 crore
Net recovery      ₹4.20 crore
Recovery rate     70.0%
Residual loss     ₹1.80 crore
Loss rate         30.0%
```

```text
Regulatory threshold
≠ accounting presumption
≠ bank policy cutoff
≠ analytical rule of thumb
≠ illustrative worked-case assumption
```

**Framework map**

| Framework | Main question | Key output |
|---|---|---|
| Underwriting | Should credit be granted and on what structure | Approval / decline / terms |
| Credit monitoring | Is repayment risk changing | Rating / watch / escalation |
| RBI IRACP | How is the asset classified and provisioned | Standard / NPA class + provision |
| PD / LGD / EAD | What are likelihood, severity and exposure dimensions | Risk parameters |
| Ind AS 109 | What ECL state applies for an Ind AS reporter | Stage + ECL |
| RBI Basel capital | How does credit exposure become prudential RWA | Risk weight + RWA |
| Large Exposures Framework | Is single-name concentration excessive | Counterparty / group limit |
| Stress testing | What happens under adverse conditions | Stressed loss + capital effect |
| Model governance | Can model outputs be relied on | Controlled model use |
| Workout / recovery | What value can be recovered after failure | Net recovery + residual loss |

**Final never-confuse board**

| Never confuse | Distinction |
|---|---|
| Customer vs borrower | Relationship party vs contractual debtor |
| Borrower vs obligor | Credit recipient vs legal performance unit |
| Obligor vs group | Legal debtor vs connected economic set |
| Product vs facility | Archetype vs specific contract |
| Facility vs account | Contract vs booking record |
| Facility vs exposure | Contract vs amount at risk |
| Sanction vs limit | Approved ceiling vs operative ceiling |
| Limit vs drawing power | Facility ceiling vs eligible borrowing base |
| Drawing power vs balance | Availability basis vs funded use |
| Balance vs EAD | Current use vs default-point exposure |
| Bureau score vs lender score | CIC output vs bank decision model |
| Internal rating vs external rating | Bank view vs ECAI assessment |
| External rating vs risk weight | Assessment grade vs RBI mapping outcome |
| Repayment source vs collateral | Default prevention vs loss mitigation |
| Collateral vs charge | Asset vs legal security interest |
| Appraised value vs realisable value | Valuation opinion vs recovery basis |
| First charge vs pari passu | Sole first rank vs shared first rank |
| Arrears vs DPD | Amount unpaid vs time unpaid |
| DPD vs SMA | Clock vs regulatory stress bucket |
| SMA vs NPA | Early stress state vs prudential NPA state |
| NPA vs default | Prudential classification vs governed credit event |
| NPA vs credit-impaired | RBI state vs Ind AS state |
| Default vs loss | Failure event vs unrecovered value |
| Default vs write-off | Credit event vs accounting removal |
| Cure vs upgrade | Internal transition vs RBI NPA transition |
| PD vs LGD | Likelihood vs severity |
| LGD vs LTV | Loss severity vs collateral leverage |
| EAD vs limit | Default-point exposure vs contractual ceiling |
| EL vs ECL | Generic expected-loss engine vs accounting measurement |
| RBI provision vs ECL | Prudential provisioning vs Ind AS allowance |
| Provision vs capital | Loss recognition vs solvency resource |
| Exposure vs RWA | Amount at risk vs risk-weighted amount |
| Stress vs forecast | Adverse resilience test vs expected path |
| Capital vs liquidity | Loss absorption vs cash availability |
| Model monitoring vs validation | Ongoing performance check vs independent challenge |
| Write-off vs waiver | Accounting removal vs debt forgiveness |
| Settlement vs cure | Negotiated resolution vs return to acceptable credit state |
| Recovery vs cure | Value collection vs credit-state restoration |

**60-second recall**

```text
WHO?
Retail / MSME / Corporate
        ↓
WHAT OWES?
Borrower / Obligor / Group / Facility
        ↓
CAN THEY PAY?
Income / Cash flow / FCF / DSCR / leverage
        ↓
HOW STRUCTURED?
Amount / tenor / limit / drawing power / covenant
        ↓
WHAT PROTECTS DOWNSIDE?
Collateral / guarantee / charge / priority
        ↓
IS RISK WORSENING?
Behaviour / financials / bureau / rating / CRILC
        ↓
HOW LATE?
Overdue → SMA → NPA
        ↓
WHAT PRUDENTIAL STATE?
Standard → Substandard → Doubtful → Loss
        ↓
HOW MUCH PROVISION?
Classification + security + ageing
        ↓
HOW RISKY?
Score → Internal rating → PD
        ↓
IF DEFAULT?
Recovery → LGD
        ↓
HOW MUCH THEN?
Drawn + undrawn conversion → EAD
        ↓
EXPECTED LOSS?
PD x LGD x EAD
        ↓
ACCOUNTING BRIDGE?
Ind AS 109 → Stage / ECL
        ↓
CAPITAL BRIDGE?
External rating where eligible → RBI risk weight → RWA
        ↓
CONCENTRATION?
Large exposure → single / connected-group ceiling
        ↓
WHAT IF STRESS?
PD ↑ + LGD ↑ + EAD ↑ + loss ↑
        ↓
IF FAILURE PERSISTS?
Workout → recovery → write-off / residual loss
```

**What to retain**

```text
Primary repayment source first; collateral second
Borrower risk, facility exposure and recovery severity are separate dimensions
Customer, obligor, group, facility and exposure are different grains
Drawing power governs working-capital availability; sanction does not guarantee availability
SMA is early stress; NPA is prudential classification; default is a governed credit event
RBI provisioning follows classification, ageing, security and special category rules
PD measures likelihood; LGD severity; EAD default-point exposure
Internal rating does not set Standardised Approach risk weight
Eligible external rating enters RBI mapping before regulatory risk weight
Single-name concentration is measured against eligible Tier 1 capital
Default starts recovery; it does not fix final loss
Write-off, waiver, settlement, cure and recovery are different outcomes
```

**Sources**

```text
01 — Credit Risk — Core End-to-End Masterclass
Issuing body  Primer project source pack
Reference     No reference number
Date          Undated

Reserve Bank of India (Commercial Banks – Income Recognition, Asset Classification and Provisioning) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/164; DOR.STR.REC.83/21.04.048/2025-26
Date          28 November 2025

Reserve Bank of India (Commercial Banks – Resolution of Stressed Assets) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/165; DOR.STR.REC.84/21.04.048/2025-26
Date          28 November 2025

Reserve Bank of India (Commercial Banks – Prudential Norms on Capital Adequacy) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/151; DOR.CAP.REC.70/21-01-002/2025-26
Date          28 November 2025

Reserve Bank of India (Commercial Banks – Concentration Risk Management) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/158; DOR.CRE.REC.77/07-03-001/2025-26
Date          28 November 2025

Reserve Bank of India (Commercial Banks – Credit Information Reporting) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/156; DOR.FIN.REC.No.75/20.16.056/2025-26
Date          28 November 2025

Reserve Bank of India (Credit Information Companies) Directions, 2025
Issuing body  Reserve Bank of India
Reference     RBI/DOR/2025-26/378; DOR.FIN.REC.No.297/20.16.056/2025-26
Date          28 November 2025

Indian Accounting Standard 109 — Financial Instruments
Issuing body  Ministry of Corporate Affairs
Reference     Ind AS 109
Date          16 February 2015, as amended

Transfer of Property Act, 1882
Issuing body  Government of India
Reference     Act 4 of 1882
Date          17 February 1882
```

## Verification log
