/*
 * @Author: kuanggf
 * @Date: 2022-03-25 13:44:36
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 13:45:58
 * @Description: file content
 */
import React from 'react'

interface EmptyIconProps {
  color?: string
}

export default function EmptyIcon({ color = '#fff' }: EmptyIconProps) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <path
          d="M164.00295914 892.56024086l-0.99867527-0.02202151c-5.77293763-0.18718279-35.78054194-2.11406452-55.77166452-20.85436559-20.49761721-19.22367311-22.94420645-46.86396559-23.22608172-52.21409032a27.02589247 27.02589247 0 0 1-0.03963871-1.51067526v-150.53901076c-0.2983914-6.20125592-0.69918279-27.15031398 6.32017205-50.41603441 6.72536774-22.30778495 15.03408172-36.9531871 17.41350537-40.90494624l75.57670538-133.70577204c0.37766882-0.67055484 0.77735914-1.31908818 1.20567742-1.9500043 2.35630108-3.49591398 15.02417205-21.4907871 32.39363441-32.29784086 18.27674839-11.38181505 40.39845161-12.26157419 46.74615053-12.2615742h477.39540645c0.6144 0 1.22219355 0.01761721 1.84980646 0.05725592 4.74563441 0.30389677 29.38769892 2.38382795 48.45832258 13.29328172 18.20958279 10.42938495 32.86709677 28.65438279 35.61868387 32.19544086a29.72903226 29.72903226 0 0 1 1.57233548 2.24949678l89.760757 142.2336c0.38317419 0.62651182 0.77185376 1.28055053 1.12199569 1.95110537 1.71987957 3.30322581 10.59234408 20.75747097 15.08583226 37.73164732 4.43733334 16.7936 5.5075785 35.35332473 5.67053763 38.89878709l0.02312258 1.2111828v150.56103225c0.10129892 7.96077419-1.36423226 35.28065376-24.02656343 55.5811785-21.46215914 19.21266237-50.35437419 20.70021505-58.69832259 20.70021505H164.00295914z m-7.68990967-285.95144946c-1.6516129 2.93656774-6.78812903 12.65135484-11.10654624 26.96423226-4.56065376 15.13097634-4.01892473 29.27538924-3.94625376 30.84221935a43.49247311 43.49247311 0 0 1 0.07377203 2.03588817v150.51588817l0.05615484 0.41620646c0.35564731 2.70644301 2.00726021 9.26334624 4.85464087 12.22193548l0.38317419 0.40739785 0.45144086 0.33142365c3.98589247 2.93766882 13.86253763 4.62341505 17.31220645 4.83151829l693.10816344 0.01101074c5.75091613-0.06716559 15.80263226-1.98413763 20.35778064-6.06582364 4.07507957-3.65336774 4.98787097-9.92178924 4.98787097-10.92486883l-0.05505376-1.74190107v-149.86735484c-0.31050323-5.84670968-1.44350968-17.49938924-3.7888-26.32670968-2.65579355-10.08584947-8.5971957-22.16794839-9.76433548-24.47910537l-0.32151399-0.56375054-88.0860215-139.59542366-0.27526882-0.33252472c-3.33846021-4.02002581-11.34327742-12.61171613-17.73612042-16.27609463-5.53620645-3.16779355-16.81121721-5.19707527-22.61828818-5.73880431l-0.60228817-0.02862795h-475.87372043c-4.45384947 0.03963871-12.72843011 1.21778924-16.55136344 3.60822366-5.38425806 3.35497634-11.75948387 11.02176344-14.38114409 14.60135913l-0.22572043 0.31050323-75.103243 132.86455054-0.81149248 1.36423226 0.01101075-0.03413334c-0.0220215 0.06716559-0.34904086 0.64853334-0.34904085 0.64853334z m353.02014623-252.79146667a28.71714408 28.71714408 0 0 1-28.68851613-28.68301075V160.12276989a28.71714408 28.71714408 0 0 1 28.67750538-28.68301075 28.72264947 28.72264947 0 0 1 28.6940215 28.68301075v165.00934193a28.71163871 28.71163871 0 0 1-28.68301075 28.68301076z m192.31821075-1.08786236a28.72264947 28.72264947 0 0 1-28.68301075-28.68961721 28.75127742 28.75127742 0 0 1 6.40825806-18.06864516l65.57123442-80.86957419a28.59382366 28.59382366 0 0 1 22.30778493-10.62097205c6.62847311 0 12.86936774 2.21536344 18.03341076 6.40385377a28.44738065 28.44738065 0 0 1 10.46902366 19.30295053 28.4627957 28.4627957 0 0 1-6.24089463 21.04485162l-65.56903225 80.87067527a28.4804129 28.4804129 0 0 1-22.25273118 10.62097204h-0.04404302z m-381.41137204-2.19334194a28.48591828 28.48591828 0 0 1-22.40908388-10.80154838l-64.45914838-80.86406882a28.71714408 28.71714408 0 0 1 4.54964301-40.31366882 28.37911398 28.37911398 0 0 1 17.85944086-6.25741075c8.79428818 0 16.97417634 3.93964731 22.44872258 10.80705376l64.46465377 80.86296774a28.71163871 28.71163871 0 0 1-4.53753119 40.30926452 28.79091613 28.79091613 0 0 1-17.87045161 6.25741075h-0.04624516z"
          fill={color}
        />
        <path
          d="M510.42766452 774.5447914c-63.9064086 0-119.43143226-42.84504086-135.01384947-104.17603441l-1.25632687-4.94382796-254.74257205-0.15194838a28.74577205 28.74577205 0 0 1-28.68301076-28.70613334 28.71714408 28.71714408 0 0 1 28.68301076-28.672l280.51103656 0.17947527a28.74026666 28.74026666 0 0 1 28.6675957 28.6940215c0 45.08903226 35.94460215 80.40271828 81.83411613 80.40271829 45.72545376 0 81.54563441-35.31258495 81.5456344-80.40161721a28.75678279 28.75678279 0 0 1 28.68301076-28.69512258l277.9136-0.17507097c15.82355269 0 28.68301076 12.84844731 28.6940215 28.66098925s-12.84734624 28.69512258-28.66098924 28.71824516l-252.16495484 0.15194839-1.25742796 4.94382796c-15.5648 61.32989247-70.97090753 104.17052903-134.75289462 104.17052903z"
          fill={color}
        />
      </svg>
    </div>
  )
}
