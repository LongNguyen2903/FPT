param (
    [string]$Name
)

$mdPath = "diagrams/$Name.md"
$pngPath = "diagrams/$Name.png"

if (-not (Test-Path $mdPath)) {
    Write-Error "File $mdPath khong ton tai."
    exit 1
}

$md = Get-Content -Path $mdPath -Raw -Encoding UTF8
if ($md -match '(?s)```mermaid\s*\r?\n(.*?)\r?\n```') {
    $code = $Matches[1].Trim()
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($code)
    $b64 = [Convert]::ToBase64String($bytes).Replace('+', '-').Replace('/', '_').Replace('=', '')
    $url = "https://mermaid.ink/img/$b64`?bgColor=121212&type=png"
    
    Write-Host "Dang tai anh tu: $url"
    Invoke-WebRequest -Uri $url -OutFile $pngPath -UserAgent "Mozilla/5.0"
    Write-Host "Da luu anh vao: $pngPath"
} else {
    Write-Error "Khong tim thay khoi code Mermaid trong $mdPath."
}
