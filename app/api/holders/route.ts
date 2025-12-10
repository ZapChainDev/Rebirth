import { NextResponse } from "next/server";

const TOKEN_ADDRESS = "8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump";

interface HolderData {
  rank: number;
  address: string;
  balance: string;
  percentage: string;
}

export async function GET() {
  try {
    // Try SolanaFM API - they have good public access
    const solanaFmResponse = await fetch(
      `https://api.solana.fm/v0/tokens/${TOKEN_ADDRESS}/holders?page=1&limit=10`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    if (solanaFmResponse.ok) {
      const data = await solanaFmResponse.json();
      if (data.result && data.result.length > 0) {
        const holders: HolderData[] = data.result.map(
          (
            item: { owner: string; amount: number; percentage: number },
            index: number
          ) => ({
            rank: index + 1,
            address: item.owner,
            balance: item.amount.toLocaleString(),
            percentage: item.percentage.toFixed(2),
          })
        );
        return NextResponse.json({ holders, source: "solanafm" });
      }
    }

    // Real holder data from Solscan (Token: 8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump)
    // Total 294 holders for 100% of total supply
    const referenceHolders: HolderData[] = [
      {
        rank: 1,
        address: "Pump.fun AMM (Rebirth-WSOL)",
        balance: "237,853,015",
        percentage: "23.78",
      },
      {
        rank: 2,
        address: "CwV2m2...29uLWG",
        balance: "51,000,703",
        percentage: "5.10",
      },
      {
        rank: 3,
        address: "9hpzqL...hE41NG",
        balance: "50,000,000",
        percentage: "5.00",
      },
      {
        rank: 4,
        address: "7Jrd47...KUYPAE",
        balance: "37,624,109",
        percentage: "3.76",
      },
      {
        rank: 5,
        address: "CmBh5b...VYWoL6",
        balance: "30,518,665",
        percentage: "3.05",
      },
      {
        rank: 6,
        address: "2BTDH8...W5iW2w",
        balance: "28,318,370",
        percentage: "2.83",
      },
      {
        rank: 7,
        address: "2SCCcP...32NMav",
        balance: "26,227,412",
        percentage: "2.62",
      },
      {
        rank: 8,
        address: "Js87gQ...85TadU",
        balance: "22,361,624",
        percentage: "2.23",
      },
      {
        rank: 9,
        address: "GpdSSe...tWVQh4",
        balance: "18,511,461",
        percentage: "1.85",
      },
      {
        rank: 10,
        address: "HAEmwU...6cCoc4",
        balance: "18,490,749",
        percentage: "1.84",
      },
    ];

    return NextResponse.json({
      holders: referenceHolders,
      source: "reference",
      solscanUrl: `https://solscan.io/token/${TOKEN_ADDRESS}#holders`,
    });
  } catch (error) {
    console.error("Error fetching holders:", error);
    return NextResponse.json(
      { error: "Failed to fetch holder data" },
      { status: 500 }
    );
  }
}
